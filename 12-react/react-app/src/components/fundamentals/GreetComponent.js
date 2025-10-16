// import React from 'react'

//React.createElement
// function GreetComponent() {
//     return (
//         React.createElement(
//             'div', { id: 'greet-id', className: 'greet-class' }, React.createElement('h1', null, 'Hello React')
//         )
//     )
// }

const id = 'greet-id'
function GreetComponent() {
    return (
        <div id={id}>
            <h1 style={{ backgroundColor: 'aquamarine', fontFamily: 'serif' }}>Hello JSX</h1>
        </div>
    )
}

export default GreetComponent
