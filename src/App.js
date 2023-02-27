import {useState} from 'react';
import Title from './page/Title/Title';
import TodoInput from './page/TodoInput/TodoInput';
import TodoList from './page/TodoList/TodoList';
import TodoSort from './UI/select/Select.jsx';

import './index.css';

export default function App() {

  let [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      title: 'Second task',
      completed: false,
      edited: false,
    },
    {
      id: crypto.randomUUID(),
      title: 'First task',
      completed: false,
      edited: false,
    },
  ]);

  let [sortType, setSortType] = useState('');

  let callback = {
    
    createTodo (title) {
      let newTodo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
        edited: false,
      };
      setTasks((prev) => [...prev, newTodo]);
    },
  
    deleteTodo (todoId) {
      setTasks(prev => prev.filter(item => item.id !== todoId));
    },
  
    editModeTodo (todoId) {
      setTasks(prev => prev.map(item => item.id === todoId ? {...item, edited: !item.edited} : item));
    },
  
    editTodoTitle (todoId, newTitle) {
      setTasks(prev => prev.map(item => item.id === todoId ? {...item, title: newTitle} : item));
    },
  
    completeTodo (todoId) {
      setTasks(prev => prev.map(item => item.id === todoId ? {...item, completed: !item.completed} : item));
      console.log(tasks)
    },
  }
  
  function sortTasks(sort) {
    setSortType(sort);
    setTasks([...tasks].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <Title/>
      <TodoInput callback={callback}/>
      <TodoSort
        defaultOption='Sort by...'
        options={[{value: 'title', name: 'Title'},{value: 'title', name: 'Title'}]}
        value={sortType}
        onChangeCallback={sortTasks}
      />
      <TodoList 
        callback={callback}
        tasks={tasks}
      />
    </div>
  );
}