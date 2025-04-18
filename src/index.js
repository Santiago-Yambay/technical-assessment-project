const express = require('express');
const devOpsRouter = require('./routes/devops.route');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/DevOps', devOpsRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
