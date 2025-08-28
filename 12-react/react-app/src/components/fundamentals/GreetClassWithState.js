import React, { Component } from 'react'

export class GreetClassWithState extends Component {
    constructor() {
        super()
        this.state = { message: 'Hello World!' }

        // this.changeState = this.changeState.bind(this)
    }

    changeState = () => {
        this.setState({ message: 'changed' })
    }


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeState}>
                    Change Message
                </button>
            </div>
        )
    }
}

export default GreetClassWithState
