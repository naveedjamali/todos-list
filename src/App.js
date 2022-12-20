import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import React, { useEffect, useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';

function App() {
  let initItems = [];
  if (localStorage.getItem('todos') === null) {
    initItems = [];
  } else {
    initItems = JSON.parse(localStorage.getItem('todos'))
  }


  const [todos, setTodos] = useState(initItems);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))


  }, [todos])

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => { return e !== todo }))
  }


  const addTodo = (title, desc) => {
    console.log(title, desc);
    const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const newTodo = { sno: sno, title: title, desc: desc };

    console.log('new todo', newTodo);
    setTodos([...todos, newTodo]);
    

  };

  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
