import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col App">
          <ul class="list-group">
            {this.props.todoList.map(item =><li key = {item + 1}> <TodoItem item={item} /> <button>Del</button> </li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default TodoList;