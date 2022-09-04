/**
 * Generates `nBytes` of random bytes.
 */
export function randomBytes(nBytes) {
  if (nBytes < 0) nBytes = 40;
  // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
  const crypto = typeof self !== 'undefined' && (self.crypto || self['msCrypto']);
  const bytes = new Uint8Array(nBytes);
  if (crypto) {
    crypto.getRandomValues(bytes);
  } else {
    // Falls back to Math.random
    for (let i = 0; i < nBytes; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  return bytes;
}

/**
 * Generate a unique client-side identifier.
 *
 * @returns {string} A unique 20-character wide identifier.
 */
export function uid(outputLength = 20) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uid = '';
  while (uid.length < outputLength) {
    const bytes = randomBytes(40);
    bytes.forEach(b => {
      // Length of `chars` is 62. We only take bytes between 0 and 62*4-1 (both inclusive).
      // The value is then evenly mapped to indices of `char` via a modulo operation.
      const maxValue = 62 * 4 - 1;
      if (uid.length < 20 && b <= maxValue) {
        uid += chars.charAt(b % 62);
      }
    });
  }
  return uid;
}
