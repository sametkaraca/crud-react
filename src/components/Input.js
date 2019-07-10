import React, {Component} from 'react'

class Input extends Component {
    render() {
        return (
            <div>
                <form >
                    <input type="text" className="form-control" placeholder="Add Item"></input>
                    <button type="submit" >Add Item</button>
                </form>
            </div>
        )
    }
}

export default Input