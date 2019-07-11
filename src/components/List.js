import React, {Component} from 'react'
import Item from './Item'

class List extends Component{
    render() {
        const {items, removeList, handleDeleteItem} = this.props
        return (
            <ul>
                {
                    items.map(item => {
                        return <Item 
                        key={item.id} 
                        title={item.title} 
                        handleDeleteItem={()=>handleDeleteItem(item.id)} />
                    })       
                }
                <button onClick={removeList} type="button"><i className="fas fa-minus-circle"></i></button>
            </ul>
        )
    }
}


export default List