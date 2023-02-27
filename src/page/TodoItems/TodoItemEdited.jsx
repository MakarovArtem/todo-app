import Button from '../../UI/button/Button.jsx';
import Input from '../../UI/input/Input.jsx';
import style from './TodoItem.module.css';

export default function TodoItem({callback, title, id}) {
  
  return(
    <section className={style.section}>
      <Input type="text" value={title} onChange={ (e) => {callback.editTodoTitle(id, e.target.value)} }/>
      <Button onClick={() => callback.editModeTodo(id)}>Save</Button>
    </section>
  )
}