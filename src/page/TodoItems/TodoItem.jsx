import Button from '../../UI/button/Button.jsx';

import style from './TodoItem.module.css';

export default function TodoItem({id, title, callback}) {
  
  return(
    <section className={style.section}>
      <div className={style.title__container}>
        <h2 className={style.title}>{title}</h2>
      </div>
      <div 
        style={{
          width: '20vw',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button onClick={() => callback.editModeTodo(id)}>Edit</Button>
        <Button onClick={() => callback.deleteTodo(id)}>Delete</Button>
        <Button onClick={() => callback.completeTodo(id)}>Done / Undone</Button>
      </div>
    </section>
  )
}