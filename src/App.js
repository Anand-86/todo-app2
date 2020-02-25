import React, { useState } from 'react';    // Import Hooks.
import './App.css';


// Now at 00:06:27 we create the component

function Todo({ todo, index, completeTodo, removeTodo }) {    // props braught in here.
  return <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">{todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>X</button>

    </div>
  </div>
}

function TodoForm({ addTodo }) {    // inside here is where we want to create our state.
  const [value, setValue] = useState(''); // setValue() line 14

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" className="input" value={value} placeholder="Add To-do..." onChange={e => setValue(e.target.value)} />
  </form>
}

function App() {    // inside here is where we want to create our state.
  const [todos,

    setTodos] = useState([   // Initial state data is going to go here which is an array of objects.
      {
        text: 'Learn aboout React',
        isCompleted: false
      },
      {
        text: 'Meet friend for lunch',
        isCompleted: false
      },
      {
        text: 'Build really cool To-do app',
        isCompleted: false
      }

    ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];    // [...todos, { text }] copy 'todos' and add in 'text'.
    setTodos(newTodos);
  };


  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }


  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (     // For each todo we map through we want to create a component.
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )

}

export default App;
