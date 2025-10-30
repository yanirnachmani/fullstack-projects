const { existsSync, mkdirSync, writeFileSync, readFileSync, appendFileSync, rmSync, unlinkSync } = require("fs");



try {
    if(!existsSync('./files')){
        mkdirSync('./files')
    }
    writeFileSync('./files/greet.txt', 'hello world')
    let fileContent = readFileSync('./files/greet.txt', 'utf8')
    console.log(fileContent);
    appendFileSync('./files/greet.txt', ' and hello backend')
    fileContent = readFileSync('./files/greet.txt', 'utf8')
    console.log(fileContent);
    writeFileSync('./files/greet.txt', 'hello Nadiv')
    fileContent = readFileSync('./files/greet.txt', 'utf8')
    console.log(fileContent);
    // rmSync('./files', {recursive: true})
    unlinkSync('./files/greet.txt')
} catch(e) {
    console.log(e)
}