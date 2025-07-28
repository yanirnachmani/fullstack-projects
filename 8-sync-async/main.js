
const syncBtn = document.getElementById('getSync')
const asyncBtn = document.getElementById('getAsync')
const test = document.getElementById('test')

syncBtn.addEventListener('click', getSync)

function getSync() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:3000/', false)

    xhr.send()

    if (xhr.status === 200) {
        console.log(xhr.response);
    } else {
        console.log(xhr.status);

    }
}

test.addEventListener('click', () => {
    console.log('Shoooooockkkkkked!!!!!!!');
})