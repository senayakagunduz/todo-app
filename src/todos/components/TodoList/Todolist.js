import React from 'react'
import Todo from '../Todo/Todo'

function Todolist({todos,setTodos,filteredTodos}) {
    return (
        <section className='todoapp goTop'>
            <section className="main">
                <ul className="todo-list">
                    {
                        filteredTodos.map((todo)=>(
                            //her submitlenen inputText todo olarak <Todo/> compenentini map ler, (Todolist componentinde.)
                            //todo={todo} todos dan dönen herbir elemanı temsil eder
                            <Todo text={todo.text} 
                            key={todo.id} todos={todos} 
                            setTodos={setTodos} todo={todo}
                             />
                        ))
                    } 
                </ul>
            </section>
        </section>
    )
}

export default Todolist