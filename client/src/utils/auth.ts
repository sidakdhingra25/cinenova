// export const generateRandomString = (length: number): string => {
//   const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   const values = crypto.getRandomValues(new Uint8Array(length));
//   return values.reduce((acc, x) => acc + possible[x % possible.length], "");
// };

// export const generateCodeChallenge = async (codeVerifier: string): Promise<string> => {
//   const encoder = new TextEncoder();
//   const data = encoder.encode(codeVerifier);
//   const digest = await crypto.subtle.digest('SHA-256', data);
//   return btoa(String.fromCharCode(...new Uint8Array(digest)))
//     .replace(/=/g, '')
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_');
// };