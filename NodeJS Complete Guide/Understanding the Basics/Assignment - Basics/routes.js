//Sam Castillo's Assignment routes.js

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment - Basics</title></head>');
        res.write('<body><h1>Welcome to Sam\'s Site</h1></body>');
        res.write('<p>Enter Username</p>');
        res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment - Basics</title></head>');
        res.write('<body><h1>List of users created</h1>');
        res.write('<ul><li>NotADummy</li><li>SmartKid</li><li>UserX</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
};

exports.handler = requestHandler;
