import Header from './components/Header/Header'
import Card from './components/Todo/Card';
import './App.css';
import { useState } from 'react';

function App() {
  const data = JSON.parse(localStorage.getItem('todo'));
  const [todo, setTodo] = useState(data ? data : [])
  const newId = Date.now();

  function handleAddTodo(text) {
    setTodo([
      {
        id: newId,
        title: text
      },
      ...todo
    ])
  }

  function deleteTodo(removeTodoID) {
    setTodo(todo.filter(item => item.id !== removeTodoID));
  }

  function updateTodo(todoId, newVal) {
    const transformed = todo.map((item) => {
      if (item.id === todoId) {
        return { id: todoId, title: newVal }
      }
      else {
        return item
      }
    })
    setTodo(transformed);

  }

  localStorage.setItem('todo', JSON.stringify(todo));

  return (
    <div className="container mx-auto">
      <Header />
      <Card todo={todo} handleAddTodo={handleAddTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}
export default App;
