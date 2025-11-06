import { createServer, Server, IncomingMessage, ServerResponse } from 'http'
import { createReadStream } from 'fs'

const hostname = 'localhost'
const port = 5555

const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
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
        if (error instanceof Error) {
            console.error("Error message:", error.message);
        } else {
            console.error("Unknown error:", error);
        }
        res.writeHead(500, { 'content-type': 'text/plan' })
    }
})


server.listen(port, hostname, () => console.log(`Listening on port ${port}`))