const jwt = require("jsonwebtoken");
/*const secret = "mysecretkey";
const expectedTokenWithoutExpiry =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJuYXRoYW5rIiwiaWF0IjoxNjQzOTg3NDE0fQ.U1bbfhp0ApmRSu5g7XdfKin7qWVNkgGS7H6dHWaH1Aw";
const payload = {
  id: 1,
  username: "nathank",
  iat: 1643987414,
};
*/
/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken(payload, secret) {
  const token = jwt.sign(payload, secret);
  // return jwt.sign()
  return token;
}

// const header = {
//   alg: "HS256",
//   typ: "JWT",
// };
// const headerBaseCoded = btoa(JSON.stringify(header));

// const claims = payload;
// const payloadBaseCoded = btoa(JSON.stringify(claims));
// console.log(payloadBaseCoded);

// const signature = HMACSHA256(
//   `${headerBaseCoded}.${payloadBaseCoded}`,
//   "mysecretkey"
// );
// const signatureBaseCoded = btoa(signature);

// const jwt = `${headerBaseCoded}.${payloadBaseCoded}.${signatureBaseCoded}`;
// console.log({ jwt });
//}
// createToken(payload, signature);

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
// const newPayload = {
//   id: 1,
//   username: "nathank",
//   iat: 1643987414,
//   expiresIn: "1h",
// };
function createTokenWithExpiry(payload, secret, expiry) {
  const token = jwt.sign(payload, secret, { expiresIn: expiry });
  return token;
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(token, secret) {
  const decoded = jwt.verify(token, secret);
  
}

module.exports = {
  createToken,
  createTokenWithExpiry,
  verifyToken,
};
