import style from './Title.module.css';

export default function Title() {
  return(
    <header className={style.main}>
      <h1 className={style.title}>Simple To-Do SPA</h1>
    </header>
  )
}