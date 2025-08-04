// import { addUserToHtml } from './common.js'


$('#getWebsiteUserCredsByPromise').on('click', getData)

function getData() {
    promisifyAjax('http://localhost:3000/websites', 'GET')
        .then((websites) => {
            const promises = []
            for (const website of websites) {
                promises.push(promisifyAjax('http://localhost:3000/bulk-users', 'POST', website.user))
            }
            return Promise.allSettled(promises)//[{status: fullfield, value: [user1, user2], reason: null}, {status: rejected, reason: err, value: null}]
        })
        .then((websitePromisesResult) => {
            const promises = []
            for (const websitePromiseResult of websitePromisesResult) {
                if (websitePromiseResult.status === 'fulfilled') {
                    for (const user of websitePromiseResult.value) {
                        promises.push(promisifyAjax('http://localhost:3000/role/' + user.role, 'GET'))
                    }
                } else {
                    console.log(websitePromiseResult.status, websitePromiseResult.reason);
                }
            }
            return Promise.allSettled(promises)
        })
        .then(data => console.log(data))


}

function promisifyAjax(url, type, data = null) {
    return new Promise((resolve, reject) => {
        const ajaxObj = {
            url,
            type,
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        }
        if (type === 'POST') {
            ajaxObj.contentType = 'application/json; charset=UTF-8'
            if (data) {
                ajaxObj.data = data
            }
        }
        $.ajax(ajaxObj)
    })
}
