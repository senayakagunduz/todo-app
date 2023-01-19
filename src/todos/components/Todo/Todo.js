import React from 'react'

function Todo({ text, todos, setTodos, todo }) {
    //tıklanan id'li todo yu listeden çıkarır diğerlerini verir
    const deleteHandler = () => {
        setTodos(todos.filter((item) => (item.id !== todo.id)))
        console.log(todos);
    }
    // tıklayınca completed true ise false, false ise true yapar
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            } return item;
        }))
    }
    return (
        <li className={`${todo.completed ? "completed" : ""}`}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={completeHandler} ></input>
                <label>{text}</label>
                <button className="destroy" onClick={deleteHandler}></button>
            </div>
        </li>
    )
}
export default Todo