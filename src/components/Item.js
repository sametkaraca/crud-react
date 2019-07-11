import React, {Component} from 'react'

class Item extends Component{
    render() {
        const { title } = this.props
        return (
            <li>
                <h6>{title}</h6>
                <span>List Icon</span>
                <span>Remove Icon</span>
            </li>
        )
    }

}

export default Item