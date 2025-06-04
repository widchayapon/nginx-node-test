const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const isDev = process.env.NODE_ENV !== 'production';

app.use(cors({
  origin: isDev ? '*' : 'https://yourdomain.com',
}));
// ✅ Middleware
// app.use(cors());

// ✅ Route หลัก
app.get('/', (req, res) => {
    console.log("request is coming!!");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'test.html'));
});

// ✅ Static files
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
