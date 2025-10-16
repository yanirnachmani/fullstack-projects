$('#getWebsiteUserCredsByFetch').on('click', getData)



function getData() {
    const users = []
    const websites = []
    fetch('http://localhost:3000/websites', { method: 'GET' })
        .then(res => {
            console.log(res.status);
            console.log(res.headers);
            return res.json()
        })
        .then((websitesRes) => {
            console.log('websites', websitesRes);
            const promises = []
            for (const website of websitesRes) {
                promises.push(fetch('http://localhost:3000/bulk-users', {
                    method: 'POST',
                    body: JSON.stringify(website.users),
                    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
                }))
                websites.push(website)
            }
            return Promise.allSettled(promises)//[{status: fulfielld, value: {status:200, json: Promise()}, reason: null}, {status: rejected, reason: err, value: null}]
        })
        .then(responses => jsonAll(responses))
        .then((bulkUsersPromisesResult) => {
            console.log('bulk-users', bulkUsersPromisesResult);

            const promises = []
            for (const key in bulkUsersPromisesResult) {
                if (bulkUsersPromisesResult[key].status === 'fulfilled') {
                    for (const user of bulkUsersPromisesResult[key].value) {
                        promises.push(fetch('http://localhost:3000/role/' + user.role, { method: 'GET' }))
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
        .then(responses => jsonAll(responses))
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

// [{status: fulfielld, value: {status:200, json: Promise()}, reason: null}, {status: rejected, reason: err, value: null}]
function jsonAll(responses) {
    console.log('jsonall', responses);

    const promises = []
    for (const response of responses) {
        if (response.status === 'fulfilled') {
            if (response.value.status === 200) {
                promises.push(response.value.json())
            } else {
                console.log('http res error', response.value.status);
            }
        } else {
            console.log(response.status);
            console.log(response.reason);
        }
    }
    return Promise.allSettled(promises)
}