import { useState } from "react";
// import taskData from '../../data/taskData.json';

export default function useTask() {

  // let a = JSON.parse(taskData);

  const [task, setTask] = useState([
    {
    id: 353434343434,
    title: 'hmmm',
    completed: false,
    edited: false,
    },
  ]);
 
  // console.log(task)
 
  function editTask(id) {
    setTask(prev => prev.map(item => item.id === id ? {...item, edited: !item.edited} : item));
    console.log(task);
  }
  function editTitle(id, titleChanges) {
    setTask(prev => prev.map(item => item.id === id ? {...item, title: titleChanges} : item));
    console.log(task);
  }
  function deleteTask(id) {
    setTask(prev => prev.filter(item => item.id !== id));
    console.log(task);
  }
  function completeTask(id) {
    setTask(prev => prev.map(item => item.id === id ? {...item, completed: !item.completed} : item));
    console.log(task);
  }
 
  // const editTask = (id) => setTask(prev => prev.map(item => item.id === id ? {...item, edited: !item.edited} : item));
  
  // const editTitle = (id, titleChanges) => setTask(prev => prev.map(item => item.id === id ? {...item, title: titleChanges} : item));
  
  // const deleteTask = (id) => setTask(prev => prev.filter(item => item.id !== id));
  
  // const completeTask = (id) => setTask(prev => prev.map(item => item.id === id ? {...item, completed: !item.completed} : item));

  return {editTask, editTitle, deleteTask, completeTask, task, setTask}
}