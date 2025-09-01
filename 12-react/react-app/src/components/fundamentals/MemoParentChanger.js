import React, { Component } from 'react'
import { MemoParent } from './MemoParent'

export class MemoParentChanger extends Component {
    constructor(props) {
        super(props)

        this.state = { view: 0 }

    }

    onClick = () => {
        this.setState({ view: this.state.view + 1 })
    }


    render() {
        return (
            <div>
                <button onClick={this.onClick}>Like</button>
                <MemoParent view={this.state.view} title='Forest Gump' releaseDate={1994} />
            </div>
        )
    }
}

export default MemoParentChanger