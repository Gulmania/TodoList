import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [todolist, settodolist] = useState([]) 

  let saveTodoList = (eve)=>{
    let toname = eve.target.todoname.value;
    if (!todolist.includes(toname)) {
      let finalDolist = [...todolist, toname]
      settodolist(finalDolist)
    } else {
      alert("already exist....")
    }
    console.log(toname);
    eve.preventDefault();
  }

  let List = todolist.map((value, index)=>{
    return(
      <TodoListItems value={value} key={index} indexNumber={index} todolist={todolist} settodolist={settodolist}/>
    )
  })
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveTodoList}>
        <input type='text' name='todoname' /><button>save</button>
      </form>
      <div className='outerdiv'>
        <ul>
           {List}
      </ul>
      </div>
      
    </div>
  );
}

export default App;

function TodoListItems({value,indexNumber,todolist,settodolist}){
  let [status, setStatus] = useState(false)
  let Delete=()=>{
    let finalData = todolist.filter((val,ind)=>ind!=indexNumber)
    settodolist(finalData)
  }
  let CheckStatus=()=>{
      setStatus(!status)
  }
  return(
    <li className={(status)? "complete": ''} onClick={CheckStatus}>{`${indexNumber+1}: `}{value} <span onClick={Delete}>✖️</span></li>
  )
}