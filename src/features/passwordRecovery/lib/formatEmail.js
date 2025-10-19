export function sanitizeEmail(email) {
  return (email || '').trim().toLowerCase();
}
