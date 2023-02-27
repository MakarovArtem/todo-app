import useInput  from '../../hooks/useInput.js';
import Button from '../../UI/button/Button.jsx';
import Input from '../../UI/input/Input.jsx';

export default function TodoEnter({callback}){

  const {value, onChange, setValue} = useInput('');

  function addTask() {
    if(value) {
      callback.createTodo(value);
      setValue(() => '');
    } else {
      alert('Enter the task!')
    }
  }

  return(
    <article style={
      {
        width: '50vw',
        height: '15vh',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }
    }>
      <Input type="text" value={value} onChange={onChange} placeholder='Enter your task here'/>
      <Button onClick={addTask}>Add task</Button>
    </article>
  )
}