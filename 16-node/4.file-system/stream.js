const { createReadStream, createWriteStream } = require('fs')

const readStream = createReadStream(`${__dirname}/words1.txt`)
const writeStream = createWriteStream(`${__dirname}/word.txt`)

// readStream.on('data', (chunk) => {
//     console.log('chunk')
//     console.log(chunk)
//     writeStream.write('\nnew chunk\n')
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)