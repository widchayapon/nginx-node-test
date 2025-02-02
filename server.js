const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

// ใช้ cors
app.use(cors());

// ลบ middleware static นี้
// app.use('/', express.static(path.join(__dirname, 'public')));

// ตั้งค่า route '/' 
app.get('/', (req, res) => {
    console.log("request is coming!!"); // ควรพิมพ์ log นี้เมื่อเข้าถึง '/'
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ตั้งค่า route สำหรับ /test
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'test.html'));
});

// เสิร์ฟไฟล์ static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
