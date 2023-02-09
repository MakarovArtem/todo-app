import style from './TodoList.module.css';

export default function TodoList( {task, setTask} ) {

  function deleteTask(id) {
    let taskDeleted = [...task].filter(item => item.id !== id);
    setTask(taskDeleted);
  }

  function editTask(id) {
    let taskEdited = [...task].map( (item) => {
      if (item.id === id) {
        item.edited = !item.edited;
      }
      return item;
    });

    setTask(taskEdited);
  }

  function completeTask(id) {
    let taskCompleted = [...task].map( (item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTask(taskCompleted);
  }

  function editTitle(id, titleChanges) {
    let taskChanged = [...task].map( (item) => {
      if (item.id === id) {
        item.title = titleChanges;
      }
      return item;
    });

    setTask(taskChanged);
  }
 <TodoList>
   {task.map(todo => <Todo onHandleDelete={onHandleDelete} />)}
 </TodoList>
  return(
    <article className={style.article}>
      {
        task.map((item) => {
          if(item.edited === false){
          return(
            <section className={style.section} key={item.id}>
              <div className={style.title__container}>
                <h2 className={style.title}>{item.title}</h2>
              </div>
              <div className={style.buttons}>
                <button className={style.button} onClick={() => editTask(item.id)}>Edit</button>
                <button className={style.button} onClick={() => deleteTask(item.id)}>Delete</button>
                <button className={style.button} onClick={() => completeTask(item.id)}>Done / Undone</button>
              </div>
            </section>
          )} else {
            return(
              <section key={item.id}>
                <input className={style.input__edit} type="text" value={item.title} onChange={ (event) => {editTitle(item.id, event.target.value)} }/>
                <button className={style.button} onClick={() => editTask(item.id)}>Save</button>
              </section>
            )
          }
        })
      }
    </article>
  )
}
