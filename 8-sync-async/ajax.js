import { users, addUsersToHtml } from "./common.js";

$('#getAjax').on('click', getData)
$('#postAjax').on('click', postData)

function getData() {
    // $.get('http://localhost:3000/')
    //     .done(function (data) { addUsersToHtml(data) })
    //     .fail(function (err) {
    //         console.log(err.status);
    //     })

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/',
        success: function (data) {
            addUsersToHtml(data)
        },
        error: function (err) {
            console.log(err);

        }
    })
}

function postData() {
    // $.get('http://localhost:3000/')
    //     .done(function (data) { addUsersToHtml(data) })
    //     .fail(function (err) {
    //         console.log(err.status);
    //     })

    console.log(users);

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/',
        data: JSON.stringify(users),
        contentType: 'application/json',
        success: function (data) {
            addUsersToHtml(data)
        },
        error: function (err) {
            console.log(err);
        }
    })
}

