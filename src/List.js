import React from 'react';

const List = props => (
  <div className="todos-container">
    {
      props.listOfToDos.map((toDo, i) =>
        <div key={i} className="todo-text">
           - {toDo}
           <button
            className="single-todo-button"
            id={i}
            onClick={props.deleteToDo}
            >
              Delete
            </button>
        </div>
      )
    }
  </div>
);

export default List;