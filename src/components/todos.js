import React, { useState, useEffect } from 'react'
import Footer from './footer/index';
import Form from "./form/index";


function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <div id='container'>
      <h1 className='header mt-4 text-danger display-2 ' style={{ opacity: .4 }}><strong>Todos</strong></h1>
      <div className='todos text-align-center mt-4 shadow'>
        {/* <Form addTodo={setTodos} todos={todos} completeTodo={completeTodo}/> */}
        <Form addTodo={setTodos} todos={todos}/>
        <Footer />
      </div>
    </div>
  )
}

export default Todos;