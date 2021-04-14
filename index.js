const express = require('express');
const app = express();
const cors = require('cors');
const { dbConnection } = require('./db/connection')
require('dotenv').config();

const apiRoutes = require('./api/index')
// Dev Connection
dbConnection()
app.use(express.json());
app.use(cors());

app.use('/api', apiRoutes);

// app Start
app.listen(process.env.PORT || 5100, () => console.log('Server On Fire 5100'));