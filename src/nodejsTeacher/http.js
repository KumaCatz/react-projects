const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    if (req.method === "POST") {
        //logic for POST
        switch (req.url) {
            case '/home':
                res.write('one home created11');
                break;
            default:
                res.write('I have no idea what to create');
                break;
        }
    }
    else if (req.method === "GET") {
        //logic for GET
        switch (req.url) {
            case '/home':
                res.write('welcome home55');
                break;
            case '/about':
                res.write('this is about');
                break;
            default:
                res.write('I have no idea what to do');
                break;
        }
    }




    res.end();
})

server.listen(2000, () => {
    console.log('server is listening on port 2000');
})