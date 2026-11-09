export function notFound(req, res) {
  res.status(404).json({ success: false, error: { code: "NOT_FOUND", message: `Route ${req.method} ${req.originalUrl} was not found`, retryable: false } });
}

export function errorHandler(err, _req, res, _next) {
  console.error(err);
  const status = err.statusCode || (err.name === "ZodError" ? 400 : 500);
  res.status(status).json({
    success: false,
    error: {
      code: err.code || (status === 400 ? "VALIDATION_ERROR" : "INTERNAL_ERROR"),
      message: status === 500 ? "The server could not complete this request." : err.message,
      retryable: status >= 500
    }
  });
}
