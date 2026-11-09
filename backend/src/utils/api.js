export function success(res, data, status = 200) {
  return res.status(status).json({ success: true, data });
}

export function httpError(statusCode, code, message) {
  return Object.assign(new Error(message), { statusCode, code });
}
