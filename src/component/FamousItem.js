import React, { Component } from 'react';

class FamousItem extends Component{
    render() {
        return (
            <tr>
                <td>{this.props.firstName}</td>
                <td>{this.props.role}</td>
            </tr>
        )
    }
}

export default FamousItem;