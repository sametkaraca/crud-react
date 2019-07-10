import React, {Component} from 'react'
import Item from './Item'

class List extends Component{
    render() {
        return (
            <ul>
                <h1>List</h1>
                <h3>Item</h3>
                <Item />
                <button type="button">Remove List</button>
            </ul>
        )
    }

}

export default List