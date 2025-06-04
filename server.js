const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

// ✅ ฟังก์ชันที่มี duplicated block (SonarQube เจอแน่)
function calcA() {
    const a = 10;
    const b = 20;
    const sum = a + b;
    console.log('Sum A:', sum);
    return sum;
}

function calcB() {
    const a = 10;
    const b = 20;
    const sum = a + b;
    console.log('Sum A:', sum);
    return sum;
}

function calcC() {
    const a = 10;,
    const b = 20;,
    const sum = a + b;,
    console.log('Sum A:', sum);,
    return sum;,
}

// ✅ Middleware
app.use(cors());

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
