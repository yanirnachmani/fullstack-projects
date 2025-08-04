import { users, addUsersToHtml, testLogger } from './common.js'


const syncBtn = document.getElementById('getSync')
const asyncBtn = document.getElementById('getAsync')
const test = document.getElementById('test')

syncBtn.addEventListener('click', getSync)
asyncBtn.addEventListener('click', getAsync)

function getSync() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:3000/', false)

    xhr.send()

    if (xhr.status === 200) {
        addUsersToHtml(JSON.parse(xhr.response));
    } else {
        console.log(xhr.status);

    }
}

function getAsync() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'http://localhost:3000/')

    xhr.onprogress = function () {
        console.log(xhr.readyState);

    }
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            addUsersToHtml(JSON.parse(xhr.response));
        } else {
            console.log(xhr.status);

        }
    }
    xhr.send()
}

test.addEventListener('click', testLogger)