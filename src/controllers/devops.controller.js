const { generateJWT } = require('../middleware/auth.middleware');

exports.handleDevOpsMessage = (req, res) => {
  const { to } = req.body;

  if (!to) {
    return res.status(400).json({ error: "El campo 'to' es requerido" });
  }

  const token = generateJWT({ to });

  return res.json({
    message: `Hello ${to} your message will be send`,
    jwt: token
  });
};

exports.methodNotAllowed = (req, res) => {
  res.status(405).send('ERROR');
};
