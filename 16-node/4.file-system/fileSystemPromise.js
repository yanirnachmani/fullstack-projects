const { access, mkdir, writeFile, readFile, open } = require('fs/promises')


const path = `${__dirname}/files/greet.txt`


async function crud() {
    try {
        try {
            await access('./files')
            console.log('exists')
        } catch (error) {
            console.log('Dir not exists! Creating a dir!')
            await mkdir('./files')
        }
        await writeFile(path, 'Hello Promises!')
        let content = await readFile(path, 'utf-8')
        console.log(content)
        let fd = await open(path, 'w')
        await writeFile(fd, 'Amarta...')
        await fd.close()
        fd = await open(path, 'r')
        content = await readFile(fd, 'utf-8')
        console.log(content)
    } catch (error) {
        console.log(error)
    }

}

crud()
