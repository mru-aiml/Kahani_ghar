// Express 4 does not forward rejected async route handlers to error middleware.
// Keep API errors as JSON responses instead of allowing Node to terminate.
export const asyncHandler = (handler) => (req, res, next) =>
  Promise.resolve(handler(req, res, next)).catch(next);
