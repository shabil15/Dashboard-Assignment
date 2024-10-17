
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');


dotenv.config();


const app = express();


app.use(express.json());
app.use(cors());


connectDB();


const patientRoutes = require('./routes/patientRoutes');
const authorizationRoutes = require('./routes/authorizationRoutes');


app.use('/api/patients', patientRoutes);
app.use('/api/authorizations', authorizationRoutes);


app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
