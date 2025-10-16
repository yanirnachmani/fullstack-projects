import React, { Component } from 'react'
import ButtonChild from './ButtonChild'

export class ButtonFather extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello from me!'
        }

    }

    greetHandler = (from) => {
        this.setState({ message: `hello from ${from}` })
    }

    render() {
        return (
            <div>
                <ButtonChild greet={this.greetHandler} />
                <button onClick={() => this.greetHandler('parent')}>Greet from parent</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default ButtonFather
