const { createServer } = require('http')
const { createReadStream } = require('fs')


const server = createServer((req, res) => {
    try {
        // throw {message: 'be weak!'}
        // res.writeHead(200, {'content-type': 'text/plan'})
        // res.end('I got your request, be strong!')
        // const readStream = createReadStream('./files/file.txt')
        // res.writeHead(200, {'content-type': 'text/plan'})
        // const readStream = createReadStream('./files/index.html')
        // res.writeHead(200, {'content-type': 'text/html'})
        // readStream.pipe(res)
        let body = ''
        if (req.method === 'POST') {
            req.on('data', (chunk) => {
                body += chunk
            })
            req.on('end', () => {
                const data = JSON.parse(body)
                res.writeHead(200, { 'content-type': 'application/json' })
                res.end(JSON.stringify({ ...data, response: 'the data is the same data as in the request because this is only a stupid example xoxoxoxxo' }))
            })
        } else {
            switch (req.url) {
                case '/':
                    res.writeHead(200, { 'content-type': 'application/json' })
                    res.end(JSON.stringify({ Hello: 'world' }))
                    break;
                case '/about':
                    res.writeHead(200, { 'content-type': 'text/html' })
                    res.end('<p>What does sho want???<p/>')
                    break;

                default:
                    res.writeHead(404, { 'content-type': 'text/html' })
                    res.end('<h1>You are looking for a resource that is not exist xoxoixoix<h1/>')
                    break;
            }

        }

    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/plan' })
        res.end(error.message)
    }
})

server.listen(3333, () => console.log('Listening on port 3333'))