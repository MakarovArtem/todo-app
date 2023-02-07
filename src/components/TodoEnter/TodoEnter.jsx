import { useState } from "react";
import { v1 as uuidv1 } from 'uuid';
import style from './todo-enter.module.css';

export default function TodoEnter({ setTask }){
  const [taskInput, setTaskInput] = useState('');
  
  function handlerInputChange = (event) => {
    setTaskInput(event.target.value)
  }
 
  function addTask() {
    setTask(prev => {
        const newTask = {
          id: uuidv1(),
          title: taskInput,
          completed: false,
          edited: false,
        }
        return [...prev, newTask]
      }
    )
    setTaskInput('')
  }

  return(
    <article className={style.todo_enter_article}>{/*тут нельзя ставить тире в названии класса?*/}
      <input className={style.todo_enter_input} type="text" value={taskInput} onChange={handlerInputChange} placeholder='Enter your task here'/>
      <button className={style.todo_enter_button} onClick={addTask}>Add task</button>
    </article>
  )
}
