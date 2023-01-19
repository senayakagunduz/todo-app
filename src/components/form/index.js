import React, { useState, useEffect } from 'react'
import "./style.css";
// import {ImCross} from 'react-icons/im';
// import {AiOutlineDownCircle} from 'react-icons/ai';

function Form({addTodo,todos}) {
  const initialFormValues = { text: "",id:Math.floor(Math.random()*1000),isComplete:false}
  const [form, setForm] = useState({initialFormValues});

  useEffect(() => {
    setForm(initialFormValues);
    console.log(form)
  }, []);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.text === "" || /^\s*$/.test(form.text)) {
      return false;
    } 
   addTodo([...todos,form])
    console.log(form); 
  }
  return (
    <form className='form ' onSubmit={onSubmit}>
      <section className='main'>
        <div className='form-group'>
          <input type="text"
           name='text' 
           className='form-control'
           value={form.text} 
           placeholder='What needs to be done?'
           onChange={onChangeInput} />  
        </div>
        <div>
        <ul className='list'>
            {
              todos.map((item, index) => (
              <div onClick={()=>{
                setForm(todos.map(el=>el.id===item.id ? {...el,isComplete:!el.isComplete} : el))
              }}
                className={item.isComplete ? 'yapildi' : ""}key={index}>
                  {item.text}
              </div>) )
            }

              
          </ul>
        </div>
      </section>
    </form>



  )
}

export default Form
