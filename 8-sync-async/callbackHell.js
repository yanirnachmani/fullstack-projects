$('#getWebsiteUserCreds').on('click', getData)


function getData() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/websites',
        success: (websites) => {
            for (const website of websites) {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json charset=utf-8',
                    url: 'http://localhost:3000/bulk-users',
                    data: JSON.stringify(website.users),
                    success: (users) => {
                        for (const user of users) {
                            $.ajax({
                                type: 'GET',
                                url: `http://localhost:3000/role/${user.role}`,
                                success: (role) => {
                                    console.log(user.id, user.first_name, user.last_name, website.name, role.name, role.credentials);

                                }
                            })
                        }
                    },
                    error: (err) => {
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