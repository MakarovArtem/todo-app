import TodoItem from '../TodoItems/TodoItem';
import TodoItemEdited from '../TodoItems/TodoItemEdited';

export default function TodoList({callback, tasks}) {

  return(
    <article style={{
      width: '50vw',
      height: '55vh',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'space-between',
    }}>
      {
        tasks.length > 0 ? 
        <h1>Those are your todos!</h1> : 
        <h1>There are no todos in your list!</h1>
      }
      {
        tasks.map(item => item.edited === false ?
          <TodoItem 
            key={item.id}
            id={item.id}
            title={item.title}
            callback={callback}
          /> :
          <TodoItemEdited
            key={item.id}
            id={item.id}
            title={item.title}
            callback={callback}
          />
        )
      }
    </article>
  )
}