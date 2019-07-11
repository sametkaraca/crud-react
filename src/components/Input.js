import React, {Component} from 'react'

class Input extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem}=this.props
        return (
            <div>
                <form onSubmit={handleSubmit} >
                    <input type="text" value={item} onChange={handleChange}  placeholder="Add Item"></input>
                    <button type="submit" >{editItem ? "Edit Item":"Add Item"}</button>
                </form>
            </div>
        )
    }
}

export default Input