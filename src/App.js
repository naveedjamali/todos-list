import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import React, { useState } from 'react';

function App() {

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => { return e !== todo }))
  }
  const [todos, setTodos] = useState([
    { sno: 1, title: "Goto Market", desc: "Goto Market to get this job done" },
    { sno: 2, title: "Goto School", desc: "Goto Market to get this job done" },
    { sno: 3, title: "Goto University", desc: "Goto Market to get this job done" },
    { sno: 4, title: "Goto Hospital", desc: "Goto Market to get this job done" },
    { sno: 5, title: "Goto Picnic", desc: "Goto Market to get this job done" },
  ]);
  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
