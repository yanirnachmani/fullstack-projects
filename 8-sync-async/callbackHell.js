import { addUserToHtml } from './common.js'


$('#getWebsiteUserCreds').on('click', getData)


function getData() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/websites',
        success: (websites) => {
            for (const website of websites) {
                $.ajax({
                    type: 'POST',
                    url: 'http://localhost:3000/bulk-users',
                    data: JSON.stringify(website.users),
                    contentType: 'application/json; charset=UTF-8',
                    success(users) {
                        for (const user of users) {
                            $.ajax({
                                type: 'GET',
                                url: 'http://localhost:3000/role/' + user.role,
                                success(role) {
                                    user.website = website.name
                                    user.roleName = role.name
                                    user.credentials = role.credentials
                                    addUserToHtml(user, document.getElementById('websiteDetails'))
                                },
                                error() {
                                    console.log(err);
                                }
                            })
                        }
                    },
                    error() {
                        console.log(err);
                    }
                })
            }
        },
        error: (err) => {
            console.log(err);
        }
    })
}