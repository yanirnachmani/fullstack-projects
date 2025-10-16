// import { addUserToHtml } from './common.js'


$('#getWebsiteUserCredsByPromise').on('click', getData)



function getData() {
    const users = []
    const websites = []
    promisifyAjax('http://localhost:3000/websites', 'GET')
        .then((websitesRes) => {
            console.log('websites', websitesRes);

            const promises = []
            for (const website of websitesRes) {
                promises.push(promisifyAjax('http://localhost:3000/bulk-users', 'POST', website.users))
                websites.push(website)
            }
            return Promise.allSettled(promises)//[{status: fulfield, value: [user1, user2], reason: null}, {status: rejected, reason: err, value: null}]
        })
        .then((bulkUsersPromisesResult) => {
            console.log('bulk-users', bulkUsersPromisesResult);

            const promises = []
            for (const key in bulkUsersPromisesResult) {
                if (bulkUsersPromisesResult[key].status === 'fulfilled') {
                    for (const user of bulkUsersPromisesResult[key].value) {
                        promises.push(promisifyAjax('http://localhost:3000/role/' + user.role, 'GET'))
                        users.push({
                            id: user.id,
                            name: user.first_name + ' ' + user.last_name,
                            website: websites[key].name
                        })
                    }
                } else {
                    console.log(bulkUsersPromisesResult[key].status, bulkUsersPromisesResult[key].reason);
                }
            }
            return Promise.allSettled(promises)
        })
        .then(rolesPromisesResult => {
            console.log('roles', rolesPromisesResult);
            for (const key in rolesPromisesResult) {
                if (rolesPromisesResult[key].status === 'fulfilled') {
                    users[key].roleName = rolesPromisesResult[key].value.name
                    users[key].credentials = rolesPromisesResult[key].value.credentials
                } else {
                    console.log(rolesPromisesResult[key].status, rolesPromisesResult[key].reason);
                }
            }
            console.log(users);
        })
        .catch(err => console.log(err))
}

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
