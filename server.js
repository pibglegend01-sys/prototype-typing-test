const http = require('http');
const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'db.json');
let db = { users: {}, leaderboard: [] };

if (fs.existsSync(DB_FILE)) {
    try {
        db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    } catch(e) {
        console.error("Error reading db.json, using default empty db");
    }
}

function saveDb() {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

http.createServer((req, res) => {
    // API Endpoints
    if (req.url === '/api/login' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                const { username, password } = JSON.parse(body);
                if (db.users[username] && db.users[username] === password) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true, username }));
                } else {
                    res.writeHead(401, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, message: 'Invalid credentials' }));
                }
            } catch(e) {
                res.writeHead(400); res.end();
            }
        });
        return;
    }

    if (req.url === '/api/signup' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                const { username, password } = JSON.parse(body);
                if (!username || !password || db.users[username]) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, message: 'Username exists or invalid' }));
                } else {
                    db.users[username] = password;
                    saveDb();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true, username }));
                }
            } catch(e) {
                res.writeHead(400); res.end();
            }
        });
        return;
    }

    if (req.url === '/api/score' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                const { username, wpm, acc, mode } = JSON.parse(body);
                if (username && wpm > 0) {
                    db.leaderboard.push({ username, wpm, acc, mode, date: new Date().toISOString() });
                    // Sort by highest WPM
                    db.leaderboard.sort((a, b) => b.wpm - a.wpm);
                    if (db.leaderboard.length > 100) db.leaderboard.length = 100;
                    saveDb();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true }));
                } else {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false }));
                }
            } catch(e) {
                res.writeHead(400); res.end();
            }
        });
        return;
    }

    if (req.url === '/api/leaderboard' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // Return top 20
        res.end(JSON.stringify(db.leaderboard.slice(0, 20)));
        return;
    }

    // Static server logic
    let filePath = '.' + req.url;
    if (filePath == './') filePath = './index.html';
    
    // remove query string if present
    if(filePath.includes('?')) filePath = filePath.split('?')[0];
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css'
    };
    
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}).listen(8080);
console.log('Server running on 8080');