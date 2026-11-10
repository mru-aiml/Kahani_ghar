"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface AudioRecorderProps {
  onRecordingComplete: (audioBlob: Blob, duration: number) => void;
  onError?: (error: string) => void;
  maxDurationSeconds?: number;
  maxSizeBytes?: number;
  isProcessing?: boolean;
  processingLabel?: string;
}

const DEFAULT_MAX_DURATION_SECONDS = 30;
const DEFAULT_MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

type RecorderState = "idle" | "recording" | "paused" | "preview";

function getSupportedMimeType(): string {
  if (typeof MediaRecorder === "undefined") return "";
  const candidates = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/ogg;codecs=opus",
    "audio/ogg",
    "audio/mp4",
  ];
  return candidates.find((type) => MediaRecorder.isTypeSupported(type)) ?? "";
}

export default function AudioRecorder({
  onRecordingComplete,
  onError,
  maxDurationSeconds = DEFAULT_MAX_DURATION_SECONDS,
  maxSizeBytes = DEFAULT_MAX_SIZE_BYTES,
  isProcessing = false,
  processingLabel = "Transcribing...",
}: AudioRecorderProps) {
  const [state, setState] = useState<RecorderState>("idle");
  const [duration, setDuration] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [micPermission, setMicPermission] = useState<"prompt" | "granted" | "denied">("prompt");

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedDurationRef = useRef<number>(0);
  const streamRef = useRef<MediaStream | null>(null);
  const mimeTypeRef = useRef<string>("");

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const stopTracks = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  }, []);

  const revokeAudioUrl = useCallback(() => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }
  }, [audioUrl]);

  const reset = useCallback(() => {
    stopTimer();
    stopTracks();
    revokeAudioUrl();
    mediaRecorderRef.current = null;
    chunksRef.current = [];
    mimeTypeRef.current = "";
    setState("idle");
    setDuration(0);
    setAudioBlob(null);
    setError(null);
    pausedDurationRef.current = 0;
    startTimeRef.current = 0;
  }, [stopTimer, stopTracks, revokeAudioUrl]);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000 + pausedDurationRef.current;
      setDuration(elapsed);
      if (elapsed >= maxDurationSeconds) {
        stopRecording();
      }
    }, 100);
  }, [maxDurationSeconds, stopTimer]);

  const startRecording = async () => {
    setError(null);

    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      setError("Your browser does not support microphone recording.");
      onError?.("Your browser does not support microphone recording.");
      return;
    }

    if (typeof MediaRecorder === "undefined") {
      setError("Your browser does not support audio recording.");
      onError?.("Your browser does not support audio recording.");
      return;
    }

    const mimeType = getSupportedMimeType();
    if (!mimeType) {
      setError("No supported audio recording format was found in this browser.");
      onError?.("No supported audio recording format was found in this browser.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      setMicPermission("granted");
      streamRef.current = stream;
      chunksRef.current = [];
      mimeTypeRef.current = mimeType;

      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        stopTimer();
        stopTracks();
        const blob = new Blob(chunksRef.current, { type: mimeTypeRef.current || mimeType });
        if (blob.size <= 0) {
          setError("Recording is empty. Please try again.");
          setState("idle");
          onError?.("Recording is empty. Please try again.");
          return;
        }
        if (blob.size > maxSizeBytes) {
          setError(`Recording is too large (${Math.round(blob.size / 1024)} KB). Maximum size is ${Math.round(maxSizeBytes / 1024)} KB.`);
          setState("idle");
          onError?.(`Recording is too large (${Math.round(blob.size / 1024)} KB). Maximum size is ${Math.round(maxSizeBytes / 1024)} KB.`);
          return;
        }
        setAudioBlob(blob);
        revokeAudioUrl();
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        setState("preview");
      };

      mediaRecorder.onerror = (event) => {
        console.error("MediaRecorder error:", event);
        setError("Recording failed. Please try again.");
        onError?.("Recording failed. Please try again.");
        stopRecording();
      };

      mediaRecorder.start(100);
      chunksRef.current = [];
      pausedDurationRef.current = 0;
      startTimeRef.current = Date.now();
      setState("recording");
      startTimer();
    } catch (err) {
      if (err instanceof DOMException && err.name === "NotAllowedError") {
        setMicPermission("denied");
        setError("Microphone access denied. Please allow microphone access in your browser settings.");
        onError?.("Microphone access denied. Please allow microphone access in your browser settings.");
      } else if (err instanceof DOMException && err.name === "NotFoundError") {
        setError("No microphone found. Please connect a microphone and try again.");
        onError?.("No microphone found. Please connect a microphone and try again.");
      } else {
        console.error("Recording error:", err);
        setError("Failed to start recording. Please try again.");
        onError?.("Failed to start recording. Please try again.");
      }
      setState("idle");
      stopTracks();
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && state === "recording") {
      try {
        mediaRecorderRef.current.pause();
        pausedDurationRef.current += (Date.now() - startTimeRef.current) / 1000;
        stopTimer();
        setState("paused");
      } catch (err) {
        console.error("Pause error:", err);
        setError("Could not pause recording.");
      }
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && state === "paused") {
      try {
        mediaRecorderRef.current.resume();
        startTimeRef.current = Date.now();
        setState("recording");
        startTimer();
      } catch (err) {
        console.error("Resume error:", err);
        setError("Could not resume recording.");
      }
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && (state === "recording" || state === "paused")) {
      try {
        mediaRecorderRef.current.stop();
      } catch (err) {
        console.error("Stop error:", err);
        setError("Could not stop recording.");
      }
    }
  };

  const discardRecording = () => {
    reset();
  };

  const handleConfirm = () => {
    if (audioBlob && audioBlob.size > 0) {
      if (audioBlob.size > maxSizeBytes) {
        setError(`Recording is too large (${Math.round(audioBlob.size / 1024)} KB). Maximum size is ${Math.round(maxSizeBytes / 1024)} KB.`);
        onError?.(`Recording is too large (${Math.round(audioBlob.size / 1024)} KB). Maximum size is ${Math.round(maxSizeBytes / 1024)} KB.`);
        return;
      }
      onRecordingComplete(audioBlob, duration);
    }
  };

  useEffect(() => {
    return () => {
      stopTimer();
      stopTracks();
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [stopTimer, stopTracks, audioUrl]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-kg-cream/5 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-lg text-kg-cream">Record your memory</h3>
        <span className={`text-sm font-mono ${state === "recording" ? "text-kg-danger" : "text-kg-cream/60"}`}>
          {formatTime(duration)} / {formatTime(maxDurationSeconds)}
        </span>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-kg-danger/20 border border-kg-danger/30 text-sm text-kg-danger" role="alert">
          {error}
        </div>
      )}

      {micPermission === "denied" && (
        <div className="mb-4 p-3 rounded-lg bg-kg-danger/20 border border-kg-danger/30 text-sm text-kg-danger">
          Microphone access is blocked. Please enable microphone permissions in your browser settings and refresh the page.
        </div>
      )}

      {isProcessing && (
        <div className="mb-4 p-3 rounded-lg bg-kg-teal/10 border border-kg-teal/20 text-sm text-kg-teal" role="status">
          {processingLabel}
        </div>
      )}

      {state === "idle" && (
        <div className="text-center py-8">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-kg-teal/20">
            <svg className="h-10 w-10 text-kg-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h10m-7 4a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </div>
          <p className="text-kg-cream/60 mb-4">Tap the button below to start recording your memory</p>
          <p className="text-xs text-kg-cream/40 mb-6">Maximum {maxDurationSeconds} seconds, max 5 MB</p>
          <button
            onClick={startRecording}
            disabled={micPermission === "denied" || isProcessing}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-kg-amber text-kg-night text-2xl focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
            aria-label="Start recording"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
            </svg>
          </button>
        </div>
      )}

      {state === "recording" && (
        <div className="text-center py-4">
          <div className="mx-auto mb-4 relative">
            <div className="mx-auto h-20 w-20 rounded-full bg-kg-danger/20 animate-pulse" />
            <div className="absolute inset-0 flex h-20 w-20 items-center justify-center">
              <svg className="h-10 w-10 text-kg-danger animate-pulse" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
              </svg>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={pauseRecording}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-kg-cream/10 text-kg-cream focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night"
              aria-label="Pause recording"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </button>
            <button
              onClick={stopRecording}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-kg-danger text-white focus:outline-none focus:ring-2 focus:ring-kg-danger focus:ring-offset-2 focus:ring-offset-kg-night"
              aria-label="Stop recording"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6h12v12H6z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {state === "paused" && (
        <div className="text-center py-4">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-kg-amber/20">
            <svg className="h-10 w-10 text-kg-amber" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          </div>
          <p className="text-kg-cream/60 mb-4">Recording paused</p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={resumeRecording}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-kg-amber text-kg-night focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night"
              aria-label="Resume recording"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button
              onClick={stopRecording}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-kg-danger text-white focus:outline-none focus:ring-2 focus:ring-kg-danger focus:ring-offset-2 focus:ring-offset-kg-night"
              aria-label="Stop and save recording"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6h12v12H6z" />
              </svg>
            </button>
            <button
              onClick={discardRecording}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-kg-cream/10 text-kg-cream focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night"
              aria-label="Discard recording"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {state === "preview" && audioUrl && (
        <div className="text-center py-4">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-kg-teal/20">
            <svg className="h-10 w-10 text-kg-teal" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
          <p className="text-kg-cream/60 mb-4">Preview your recording</p>
          <audio controls className="w-full max-w-xs mx-auto mb-4" src={audioUrl} />
          <div className="text-sm text-kg-cream/50 mb-4">
            Duration: {formatTime(duration)}  Size: {Math.round((audioBlob?.size || 0) / 1024)} KB
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={discardRecording}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-kg-cream/10 text-kg-cream focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night"
              aria-label="Re-record"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button
              onClick={handleConfirm}
              disabled={isProcessing}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-kg-amber text-kg-night focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night disabled:opacity-50"
              aria-label="Use this recording"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs text-center text-kg-cream/40">
        Maximum {maxDurationSeconds} seconds, max 5 MB. Audio recorded in browser.
      </p>
    </div>
  );
}
