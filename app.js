require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./modules/index');
const app = express();
const helmet = require('helmet');

const db = require('./modules/database');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/api', apiRoutes);
app.use(helmet());

//Error handling
app.use('*', (req, res, next) => {
  const err = new Error('Route Not Found');
  err.statusCode = 404;
  next(err);
});

app.use(async (err, req, res, next) => {
  if (req.file) {
    await unlink(req.file.path);
  }
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
    error: err.stack,
  });
});

//Db Setup
db.sequelize.sync();
db.sequelize.authenticate().then(() => console.log('Database Connected'));

app.listen(port, () =>
  console.log(`App is running on port:${port}`)
);
