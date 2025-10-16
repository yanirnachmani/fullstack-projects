import React, { Component } from 'react'

export class ButtonChild extends Component {
    render() {
        const { greet } = this.props

        return (
            <div>
                <button onClick={() => greet('child')}>Greet From Child</button>
            </div>
        )
    }
}

export default ButtonChild
