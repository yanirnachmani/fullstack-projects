import React, { Component } from 'react'

export class PrevState extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    countUp = () => {
        for (let i = 1; i <= 5; i++) {
            this.setState({ count: this.state.count + 1 }, () => {
                console.log(this.state.count);
            })
            console.log(this.state.count);
        }
    }

    countUpWithPrev = () => {
        for (let i = 1; i <= 5; i++) {
            this.setState((prevState) => {
                return ({
                    count: prevState.count + 1
                })
            }, () => {
                console.log(this.state.count);
            })
            console.log(this.state.count);
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.countUpWithPrev}>Increment 5</button>
            </div>
        )
    }
}

export default PrevState
