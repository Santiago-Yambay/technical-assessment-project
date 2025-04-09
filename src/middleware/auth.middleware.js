const jwt = require('jsonwebtoken');

const API_KEY = '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c';

exports.verifyHeaders = (req, res, next) => {
  const apiKey = req.header('X-Parse-REST-API-Key');
  const jwtHeader = req.header('X-JWT-KWY');

  if (apiKey !== API_KEY || !jwtHeader) {
    return res.status(401).send('ERROR');
  }

  try {
    jwt.verify(jwtHeader, API_KEY);
    next();
  } catch (err) {
    return res.status(401).send('ERROR');
  }
};

exports.generateJWT = (payload) => {
  return jwt.sign(payload, API_KEY, { expiresIn: '1m' });
};
