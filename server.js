const express = require('express');
const connectDb = require('C:\\Users\\abhay\\FIRSTAPP\\config\\db.js');

const app = express();

connectDb();

app.get('/',(req,res) => res.send('API RUNNING'));
const PORT=  process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port :${PORT}`));