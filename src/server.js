require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { NODE_ENV, PORT } = require('./config');
const pdb = require('./database/index');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.get('/ping', (_, res) => {
  res.send('PONG!');
});

/**
 *  Usuarios Routes...
*/

app.use('/api/v1/users/', require('./controllers/users/ctr-users'))

/**
 * Egresados Routes...
*/

app.use('/api/v1/egresados/', require('./controllers/egresados/ctr-egresados'));

/**
 * Empresa u organización...
*/

app.use('/api/v1/empresas/', require('./controllers/enterprise/ctr-enterprise'));

/**
 * Gráficos de egresados...
*/

app.use('/api/v1/graficos/egresados/', require('./controllers/graphics/ctr-egresados-graph'));

/*
 * Handler not found routes
 */
app.use((_, __, next) => {
  const error = new Error('Not Found');
  error.statusCode = 404;
  next(error);
});

app.use(
  NODE_ENV === 'development'
    ? ({ statusCode = 500, message, stackTrace }, _, res, next) => {
        res.status(statusCode);
        res.json({
          statusCode,
          message,
          stackTrace,
        });
      }
    : ({ statusCode, message }, _, res, next) => {
        res.status(statusCode);
        res.json({
          message,
          statusCode,
        });
      },
);

// pdb.connect(async (err, connecction) =>{
//   if(err){
//     console.log("Unable to connect to MySQL.");
//     process.exit(1);
//   }else{
    app.listen(PORT, () => {
      console.log(`🚀 SERVER LISTEN ON PORT ${PORT}`);
    });
//   }
// });


