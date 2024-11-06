import express from 'express';
const app = express();


app.get('/', (req, res) => {
  res.send('Welcome to the API');
});


app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

export default app;
