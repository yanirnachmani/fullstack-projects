import React from 'react'

const GreetComponentWithProps = ({ firstName, lastName, children }) => {
    return (
        <div>
            <h1>Hello {firstName} {lastName}</h1>
            {children}
        </div>
    )
}

export default GreetComponentWithProps
