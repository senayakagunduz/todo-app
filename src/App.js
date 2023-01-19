import { useEffect, useState } from 'react';
import './App.css';
import Form from './todos/components/Form/Form'
import Todolist from './todos/components/TodoList/Todolist';
import Footer from './todos/components/footer/Footer';

function App() {
  //inputa girilen değeri kaydetmek için inputText useState oluşturdum.
  const [inputText, setInputText] = useState("");
  //Todo yu kaydetmek için de todos usestate oluşturuldu
  const [todos, setTodos] = useState([]);
  //filtrelenen diziyi kaydetmek için yazdım.
  const [filteredTodos, setFilteredTodos] = useState([]);
  //filtrelenmiş elemanın durumunu tutmak için status tuttum.
  const [status, setStatus] = useState("all");
  useEffect(()=>{
    filterHandler(todos);
    saveLocalTodos();
  },[todos,status])

  //saveLocalTodos'u sayfa açılınca hemen çalışması için useEffect içerisine yazdım.
  useEffect(()=>{
   getLocalTodos();
  },[])

  console.log(status);
  const filterHandler=()=>{
    switch(status){
      case "completed":setFilteredTodos((todos.filter((todo)=>todo.completed===true)))
        break;
      case "active":setFilteredTodos((todos.filter((todo)=>todo.completed===false)))
       break;
      case "clearcompleted":setTodos(todos.filter((todo)=>todo.completed===false))
      break;
       default:
        setFilteredTodos(todos); 
    }
  }
  //Local Storage da key=todos olan value ise boş bir array oluşturduk
  //Todo'ları local storage e kaydediyruz
  const saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  //Local storage'dan todo'ları getirsin ve bu todoların içerisi boşsa 
  const getLocalTodos=()=>{
     //todos u boş string'e çevir
    if(localStorage.getItem(todos)!==null){
      localStorage.setItem("todos",JSON.stringify([]))
    //değilse localStorage'dan aldığı todos'ları  parse edererk Todos ları set eder.
    }else{
      setTodos (JSON.parse(localStorage.getItem("todos")));
    }
  }

  return (
    <div className="App">
      <Form inputText={inputText} setInputText={setInputText}
        todos={todos} setTodos={setTodos} setStatus={setStatus}/>
      <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      <Footer setStatus={setStatus} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
