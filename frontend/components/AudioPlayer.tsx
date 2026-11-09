"use client";

import { useEffect, useRef, useState } from "react";
import type { StoryScene } from "@/types/story";
import { ApiError, apiClient } from "@/lib/services/api-client";

interface AudioPlayerProps {
  sceneCount: number;
  currentScene: number;
  onSceneChange: (index: number) => void;
  scenes: StoryScene[];
  storyId: string;
  voice: string;
  language: string;
}

export default function AudioPlayer({ sceneCount, currentScene, onSceneChange, scenes, storyId, voice, language }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);

  useEffect(() => {
    audioRef.current?.pause();
    setAudioUrl(null);
    setError(null);
    setShouldAutoPlay(false);
  }, [currentScene]);

  const playAudio = async () => {
    try {
      await audioRef.current?.play();
      setError(null);
    } catch {
      // Fetching TTS audio is asynchronous, so browsers may no longer consider
      // the original Listen click a user gesture. Keep the controls visible and
      // explain how to resume instead of swallowing the playback failure.
      setError("Narration is ready. Press play in the audio controls to start it.");
    }
  };

  const handleCanPlay = () => {
    if (!shouldAutoPlay) return;
    setShouldAutoPlay(false);
    void playAudio();
  };

  const playNarration = async () => {
    if (audioUrl) {
      await playAudio();
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const result = await apiClient.post<{ success: true; data: { audioUrl: string } }>(
        "/tts",
        { storyId, sceneIndex: currentScene, voice, language, text: scenes[currentScene].text },
        { timeout: 60_000 }
      );
      setAudioUrl(result.data.audioUrl);
      setShouldAutoPlay(true);
    } catch (cause) {
      if (cause instanceof ApiError && cause.code === "NETWORK_ERROR") {
        setError("Narration server is unavailable. Start the backend, then try Listen again.");
      } else if (cause instanceof ApiError && cause.code === "TIMEOUT") {
        setError("Narration took too long. Please try Listen again.");
      } else {
        setError(cause instanceof Error ? cause.message : "Could not create narration.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border border-white/10 bg-kg-cream/5 p-4">
      {audioUrl && (
        <audio
          ref={audioRef}
          controls
          preload="auto"
          className="mb-3 w-full"
          src={audioUrl}
          onCanPlay={handleCanPlay}
          onError={() => setError("The narration file could not be loaded. Please try Listen again.")}
          onEnded={() => currentScene < sceneCount - 1 && onSceneChange(currentScene + 1)}
        />
      )}
      <div className="flex items-center justify-between gap-3">
        <button onClick={() => onSceneChange(Math.max(0, currentScene - 1))} disabled={currentScene === 0} className="rounded-full border border-white/20 px-3 py-1 text-sm text-kg-cream disabled:opacity-30">←</button>
        <button onClick={playNarration} disabled={!scenes[currentScene] || loading} className="rounded-full bg-kg-teal px-5 py-2 text-sm font-medium text-kg-night disabled:opacity-50">
          {loading ? "Preparing voice…" : audioUrl ? "Play narration" : "Listen"}
        </button>
        <button onClick={() => onSceneChange(Math.min(sceneCount - 1, currentScene + 1))} disabled={currentScene === sceneCount - 1} className="rounded-full border border-white/20 px-3 py-1 text-sm text-kg-cream disabled:opacity-30">→</button>
      </div>
      {error && <p className="mt-2 text-center text-xs text-kg-danger">{error}</p>}
    </div>
  );
}
