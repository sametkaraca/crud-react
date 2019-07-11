import React, {Component} from 'react'
class Item extends Component{
    render() {
        const { title, handleDeleteItem, handleEditItem} = this.props
        return (
            <li className="itemWrapper">
                <span className="title">{title}</span>
                <i onClick={handleEditItem} className="fas fa-edit pr-4"></i>
                <i onClick={handleDeleteItem} className="fas fa-trash"></i>
            </li>
        )
    }

}

export default Item