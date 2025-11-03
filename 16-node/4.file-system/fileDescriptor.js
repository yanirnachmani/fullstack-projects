const { existsSync, mkdirSync, openSync, writeFileSync, closeSync, readFileSync, appendFileSync } = require("fs");


try {
    if (!existsSync('./files')) {
        mkdirSync('./files')
    }
    let fd = openSync('./files/greet.txt', 'w')
    writeFileSync(fd, 'hello world!')
    closeSync(fd)
    fd = openSync('./files/greet.txt', 'r+') 
    let fileContent = readFileSync(fd, 'utf-8') 
    console.log(fileContent);
    // closeSync(fd)
    // fd = openSync('./files/greet.txt', 'a') 
    appendFileSync(fd, 'hello world!')
    closeSync(fd)
    fd = openSync('./files/greet.txt', 'a') 
    fileContent = readFileSync(fd, 'utf-8') 
} catch (error) {
    console.log(error)
}
