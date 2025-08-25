import React, { Component } from 'react'

export class GreetClassWithProps extends Component {
    render() {
        const { firstName, lastName } = this.props

        return (
            <div>
                <h1>hello {firstName} {lastName}</h1>
            </div>
        )
    }
}

export default GreetClassWithProps
