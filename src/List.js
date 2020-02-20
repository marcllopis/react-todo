import React from 'react';

// This component will always show the todos that are coming through props, there is no logic on how to filter here since it's already done in the parent component.
// It will show a text if there's nothing filtered and the corresponding filtered todos if there are any

const List = props => (
  props.listOfToDos.length !== 0
    ? <div className="todos-container">
      {
        props.listOfToDos.map((toDo, i) =>
          <div key={i} className="todo-text">
            - {toDo.todo} | <span className="category-text">{toDo.category}</span>
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
    : <h2 className="no-category-text">Nothing here yet...</h2>

);

export default List;