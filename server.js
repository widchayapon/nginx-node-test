const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000; // ❌ Hardcoded port แทนการใช้ process.env.PORT
const cors = require('cors');

// ❌ Duplicate Logic with slight variations
function calcA() {
    const a = 5;
    const b = 15;
    const sum = a + b;
    console.log('Sum A:', sum);
    return sum;
}

function calcB() {
    const a = 5;
    const b = 15;
    const sum = a + b;
    console.log('Sum B:', sum);
    return sum;
}

function calcC() {
    const a = 5;
    const b = 15;
    const sum = a + b;
    console.log('Sum C:', sum);
    return sum;
}

// ❌ Unused function
function neverUsed() {
    console.log("I am never used!");
}

// ❌ Middleware ไม่ใช้ try-catch หรือ error handling ใดๆ
app.use(cors());

// ❌ Route ไม่มี validation หรือ error handler
app.get('/', (req, res) => {
    console.log("Incoming request...");
    res.sendFile(path.join(__dirname + '/public/index.html')); // ❌ Path concat แบบอันตราย
});

app.get('/test', async (req, res) => {
    // ❌ Async ใช้โดยไม่จำเป็น และไม่มี await
    res.sendFile(path.join(__dirname + '/public/test.html'));
});

// ❌ Static path ซ้ำกับที่ใช้ด้านบนแบบไม่ได้ abstract ออกมา
app.use(express.static(__dirname + '/public')); // ❌ ใช้ string concat แบบไม่ปลอดภัย

// ❌ ไม่มี error handler global
// ❌ ไม่มี log level เช่น debug/info/error

// ❌ ตัวแปรไม่ได้ใช้
const debug = false;

// ❌ Callback ไม่เช็ค error
app.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
});
