const { access, mkdir, writeFile, readFile, appendFile, unlink, rmdir } = require("fs");



try {
    access('./files', (err) => {
        if (err) {
            mkdir('./files', (err) => {
                if (err)
                    throw err
            })
        }

        writeFile('./files/greet.txt', 'Hello Chen!' , (err) => {
            if(err){
                throw err
            }

            readFile('./files/greet.txt', 'utf-8', (err, content) => {
                if(err){
                    console.log(err)
                }
                console.log(content)

                appendFile('./files/greet.txt', ' hello world', (err) => {
                    if(err){
                        throw err
                    }

                    readFile('./files/greet.txt', 'utf-8', (err, content) => {
                        if(err){
                            console.log(err)
                        }

                        console.log(content)

                        unlink('./files/greet.txt', err => {
                            if(err){
                                throw err
                            }
                            console.log('file deleted')

                            rmdir('./files', err => {
                                if(err){
                                    console.log(err)
                                }
                                console.log('dir deleted')
                            })
                        })
                    })
                })
            })
        })


    })


} catch (error) {
    console.log(error)
}