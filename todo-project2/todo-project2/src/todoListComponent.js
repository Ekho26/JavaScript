import React from "react";

function TodoListComponent(props) {
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <div key={todo.id} className= {'w-full flex justify-between items-center bg-white rounded shadow-lg p-4 flex-wrap border-l-4 mb-4 ' + (todo.done? 'border-green-400':'border-orange-300')}>
            <span onClick= {() => {props.markDone(todo)}} className= {'cursor-pointer mr-3 ' + (todo.done? 'line-through' : '')}>{todo.val}</span>
            <button onClick={() => {props.deleteTodo(todo)}} className="p-2">
              ❌
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoListComponent;
