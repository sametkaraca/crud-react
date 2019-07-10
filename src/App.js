import React, {Component} from 'react';
import './App.css';
import Input from './components/Input';
import List from './components/List';

class App extends Component {
  
  state = {
    items:[],
    id:0,
    item:'',
    editItem: false
  }
  
  handleChange= e => {
    this.setState({
      item:e.target.value
    })
  }

  render() {
    return(
    <div className="App">
        <Input item={this.state.item} handleChange={this.handleChange} />
        <List />
    </div>
    )}
}

export default App;
