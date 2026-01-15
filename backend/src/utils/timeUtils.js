export const getRemainingTime = (expiresAt) => {
  const now = Date.now();
  const expiry = new Date(expiresAt).getTime();

  const diff = expiry - now;

  if (diff <= 0) return 0;

  return diff; // milliseconds
};
