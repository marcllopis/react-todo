import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  state = {
    singleToDo: '', // it will store the value of a single todo written in the input
    todoChosenCategory: 'Coding', // it will store the value of whatever option selected on the select tag, by default is coding
    noToDos: true, // used to show a text when there is still no todos written
    filteredCategory: 'All', // used to show by default all options on filtering
    listOfToDos: [] // an array that will contain each todo object
  }

  onButtonChange = (event) => {
    // grab the value of what the user wrote on the input and store it on singleTodo
    this.setState({ singleToDo: event.target.value });
  }

  handleCategory = event => {
    // grab the value of what the user chose on the select and store it on the state
    this.setState({ todoChosenCategory: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault(); // prevent the default behaviour of the form
    // creates an object that will contain the todo text and the chosen category
    let todoWithCategory = { todo: this.state.singleToDo, category: this.state.todoChosenCategory }

    this.setState({
      singleToDo: '', // reset the value
      todoChosenCategory: 'Coding', // reset the value
      filteredCategory: 'All', // reset the value
      noToDos: false, // changes the value to show something different
      listOfToDos: [...this.state.listOfToDos, todoWithCategory] // takes what was in the array before and adds the new item that is an object of the todo text and category
    });
  }

  deleteToDo = (event) => {
    let copyToDos = [...this.state.listOfToDos] // copy the todos array
    copyToDos.splice(event.target.id, 1) // takes the index of the todo we clicked and deletes it
    this.setState({
      listOfToDos: copyToDos // updates our array with the deleted one
    })
  }

  selectFilter = event => {
    // stores in the state the category the user wants to be filtered
    this.setState({
      filteredCategory: event.target.innerText,
    })
  }

  render() {

    // the next variable will contain the result of filtering what is inside of the list of todos compared to the category the user has clicked
    let filteredCategories = this.state.listOfToDos.filter(todo => todo.category === this.state.filteredCategory);

    // next variable checks if the user has selected All category, if so, it will return the full array of todos, if not, it will return whatever was filtered before
    let filteredToDos = this.state.filteredCategory === 'All' ? this.state.listOfToDos : filteredCategories


    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
        {/* Input tag that has it's value binded to the state */}
          <input
            value={this.state.singleToDo}
            onChange={this.onButtonChange}
            placeholder="Write your ToDo here..."
            className="input-todo"
          />
          {/* Select tag that binds to the state whatever option the user chose */}
          <select className="select-category" onChange={this.handleCategory}>
            <option value="Coding">Coding</option>
            <option value="Sports">Sports</option>
            <option value="Food">Food</option>
            <option value="Extra">Extra</option>
          </select>
          <button className="button-todo">Add it</button>
        </form>
        {/* Depends if there are todos already created or not, it shows something different */}
        {this.state.noToDos
          ? <h2 className="no-todos-text">Add some ToDo's...</h2>
          :
          <div className="flex-it">
            <List deleteToDo={this.deleteToDo} listOfToDos={filteredToDos} />{/* It sends as props the todos already filtered */}
            <div className="filter-container">
              {/* Options to filter */}
              <h1>Filter it</h1>
              <hr />
              <p onClick={this.selectFilter} className="filter-text">Coding</p>
              <p onClick={this.selectFilter} className="filter-text">Sports</p>
              <p onClick={this.selectFilter} className="filter-text">Food</p>
              <p onClick={this.selectFilter} className="filter-text">Extra</p>
              <p onClick={this.selectFilter} className="filter-text">All</p>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;
