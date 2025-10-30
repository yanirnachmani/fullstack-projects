const { readFileSync, createReadStream, createWriteStream } = require("fs")


try {
    const readStream = createReadStream(`${__dirname}/words.txt`)

    const writeStream = createWriteStream(`${__dirname}/words1.txt`)

    let counter = 0
    readStream.on('data', (chunk) => {
        console.log(++counter)
        console.log(chunk);
        writeStream.write(counter + ' chunkchunkchunkchunkchunkchunkchunkchunkchunkchunkchunkchunkchunkchunkchunkchunkchunkchunkchunk')
        writeStream.write(chunk)
    })
    
} catch (error) {
    console.log(error)
}