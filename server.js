const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// บอก Express ให้รองรับคำขอที่มาจาก /app
app.use('/app', express.static(path.join(__dirname, 'public')));

app.get('/app/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
