import React, { Component } from 'react'

export class ListChild extends Component {
    render() {
        const { user } = this.props
        return (
            <div>
                <label>
                    Full Name: {user.first_name + ' ' + user.last_name}
                </label>
                <input type='text' />
            </div>

        )
    }
}

export default ListChild
