import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": 'application/json' });
    res.end(JSON.stringify({
        name:"Running Succesfully"
    }));
});

const PORT = 7000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
