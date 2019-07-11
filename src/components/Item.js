import React, {Component} from 'react'
class Item extends Component{
    render() {
        const { title, handleDeleteItem } = this.props
        return (
            <li>
                <h6>{title}</h6>
                <i className="fas fa-edit"></i>
                <i onClick={handleDeleteItem} className="fas fa-trash"></i>
            </li>
        )
    }

}

export default Item