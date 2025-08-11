function promisifyAjax(url, type, data = null) {
    return new Promise((resolve, reject) => {
        const ajaxObj = {
            url,
            type,
            success: (data) => {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        }
        if (type === 'POST') {
            ajaxObj.contentType = 'application/json; charset=UTF-8'
            if (data !== null) {
                ajaxObj.data = JSON.stringify(data)
            }
        }
        $.ajax(ajaxObj)
    })
}





(async function () {
    try {
        const successRes = await promisifyAjax('http://localhost:3000/websites', 'GET')
        console.log(successRes);
    } catch (err) {
        console.log(err);
    }
})()




