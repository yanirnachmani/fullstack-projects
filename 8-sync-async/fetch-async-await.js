$('#getWebsiteUserCredsByAsyncAwaitFetch').on('click', getData)



async function getData() {
    const users = []
    const websites = []
    try {
        const websitesResJson = await fetch('http://localhost:3000/websites', { method: 'GET' })
        console.log(websitesResJson.status);
        console.log(websitesResJson.headers);
        const websitesRes = await websitesResJson.json()
        console.log('websites', websitesRes);
        const bulkUsersPromises = []
        for (const website of websitesRes) {
            bulkUsersPromises.push(fetch('http://localhost:3000/bulk-users', {
                method: 'POST',
                body: JSON.stringify(website.users),
                headers: { 'Content-Type': 'application/json; charset=UTF-8' }
            }))
            websites.push(website)
        }
        const bulkUsersPromisesResultJson = await Promise.allSettled(bulkUsersPromises)//[{status: fulfielld, value: {status:200, json: Promise()}, reason: null}, {status: rejected, reason: err, value: null}]
        const bulkUsersPromisesResult = await jsonAll(bulkUsersPromisesResultJson)
        console.log('bulk-users', bulkUsersPromisesResult);

        const rolePromises = []
        for (const key in bulkUsersPromisesResult) {
            if (bulkUsersPromisesResult[key].status === 'fulfilled') {
                for (const user of bulkUsersPromisesResult[key].value) {
                    rolePromises.push(fetch('http://localhost:3000/role/' + user.role, { method: 'GET' }))
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
        const rolesPromisesResultJson = await Promise.allSettled(rolePromises)
        const rolesPromisesResult = await jsonAll(rolesPromisesResultJson)

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

    } catch (error) {
        console.log(error);
    }

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