import React, {Component} from 'react'
import Item from './Item'

class List extends Component{
    render() {
        const {items, removeList} = this.props
        return (
            <ul>
                {
                    items.map(item => {
                        return <Item key={item.id} title={item.title} />
                    })       
                }
                <button onClick={removeList} type="button">Remove List</button>
            </ul>
        )
    }
}


export default List