import React, {Component} from 'react'
import Item from './Item'

class List extends Component{
    render() {
        const {items, removeList, handleDeleteItem, handleEditItem} = this.props
        return (
            <ul>
                {
                    items.map(item => {
                        return <Item 
                        key={item.id} 
                        title={item.title} 
                        handleDeleteItem={()=>handleDeleteItem(item.id)} 
                        handleEditItem={()=>handleEditItem(item.id)} 
                        />
                    })       
                }
                <button className="btn btn-danger mt-4 pr-5 pl-5" onClick={removeList} type="button"><i className="fas fa-minus-circle"></i></button>
            </ul>
        )
    }
}


export default List