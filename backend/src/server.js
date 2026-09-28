require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/competitions', require('./routes/competitions'));
app.use((err, req, res, next) => res.status(500).json({ code: 'GENERIC', message: 'Internal server error' }));

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/feedants')
  .then(() => app.listen(process.env.PORT || 5000, () => console.log('API running')))
  .catch(e => { console.error(e); process.exit(1); });
