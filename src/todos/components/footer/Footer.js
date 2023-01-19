import React from 'react'

function Footer({setStatus,todos,setTodos}) {
const statusHandler=(e)=>{
    setStatus(e.target.id)
}
const clearCompleted=(e)=>{
e.preventDefault();
setTodos(todos.filter((todo)=>todo.completed===false))
}
    return (
    <section className="todoapp goTop">
        <div className='footer' style={{padding:'5px',height:"30px"}}>
            <span className="todo-count"><strong>{todos.length }</strong> items left</span>
             <ul className="filters">
                     <li>
                         <a href="#/" className="selected" id="all" onClick={statusHandler}>All</a>
                     </li>
                     <li>
                         <a href="#/" id="active" onClick={statusHandler}>Active</a>
                     </li>
                     <li>
                         <a href="#/" id="completed" onClick={statusHandler}>Completed</a>
                     </li>
             </ul>
         <button id="clearcompleted" onClick={statusHandler} onMouseDown={clearCompleted} className="clear-completed">Clear completed</button>
        </div>
    </section>
        
    ) 
}


export default Footer