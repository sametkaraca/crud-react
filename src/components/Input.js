import React, {Component} from 'react'

class Input extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem}=this.props
        return (
                
                <form className="form-inline" onSubmit={handleSubmit} >
                <div class="form-group mb-2">
                    <input  className="form-control" type="text" value={item} onChange={handleChange}  placeholder="Add Item"></input>
                </div>
                    <button className="btn btn-outline-primary ml-5" type="submit" >{editItem ? "Edit Item":"Add Item"}</button>
                </form>
                
        )
    }
}

export default Input