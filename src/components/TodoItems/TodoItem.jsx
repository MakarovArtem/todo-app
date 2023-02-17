import Button from '../UI/button/Button.jsx';

import style from './TodoItem.module.css';

export default function TodoItem({id, title, editTask, deleteTask, completeTask}) {
  
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
        <Button onClick={() => editTask(id)}>Edit</Button>
        <Button onClick={() => deleteTask(id)}>Delete</Button>
        <Button onClick={() => completeTask(id)}>Done / Undone</Button>
      </div>
    </section>
  )
}