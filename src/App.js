import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  state = {
    singleToDo: '',
    listOfToDos: []
  }

  onChange = (event) => {
    this.setState({ singleToDo: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      singleToDo: '',
      listOfToDos: [...this.state.listOfToDos, this.state.singleToDo]
    });
  }

  deleteToDo = (event) => {
    let copyToDos = [...this.state.listOfToDos]
    copyToDos.splice(event.target.id, 1)
    this.setState({
      listOfToDos: copyToDos
    })
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input
            value={this.state.singleToDo}
            onChange={this.onChange}
            placeholder="Write your ToDo here..."
            className="input-todo"
          />
          <button className="button-todo">Add it</button>
        </form>
        <List deleteToDo={this.deleteToDo} listOfToDos={this.state.listOfToDos} />
      </div>
    );
  }
}

export default App;
