const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcryptjs');

const app = express();

connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT   ; 


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
