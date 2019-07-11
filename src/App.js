import React, {Component} from 'react';
import './App.css';
import Input from './components/Input';
import List from './components/List';
import uuid from 'uuid';
class App extends Component {
  
  state = {
    items:[],
    id:uuid(),
    item:'',
    editItem: false
  }
  
  handleChange = e => {
    this.setState({
      item:e.target.value
    })
    console.log('I am clicked')
  }

  handleSubmit = e =>{
    e.preventDefault()
    
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    console.log(newItem)

    const updatedItems = [...this.state.items, newItem]

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem:false
    })

  }

  removeList = ()=>{
    this.setState({
      items: []
    })
  }

  render() {
    return(
    <div className="App">
        <Input item={this.state.item} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}/>
        <List items={this.state.items} removeList={this.removeList} />
    </div>
    )}
}

export default App;
