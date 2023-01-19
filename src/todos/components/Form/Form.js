import React from 'react'

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
    //input değişince inputText e set et.
    const changedInputHandler=(e)=>{
        setInputText(e.target.value)
    }
    //input boş değilse ve tab a basılıp enter yapılmamışsa
    // inputa girilenleri submitler
    const onSubmit=(e)=>{
        e.preventDefault();
        if(inputText.trim().length!==0){
            setTodos([...todos,{text:inputText,completed:false,id:Math.random()}]); 
            setInputText("");
        } 
        console.log(todos)    
    }
    
    return (
        <section className='todoapp'>
            <header className='header' >
            <h1 style={{marginTop:"50px",marginButtom:"30px"}}>todos</h1>
                <form className='form' onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input type='text'
                            name="text"
                            className='new-todo'
                            value={inputText}
                            onChange={changedInputHandler}
                            placeholder='What needs to be done?'
                            autoFocus 
                        />
                    </div>
                </form>
            </header>
            <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
        </section>

        </section>
    )
}

export default Form