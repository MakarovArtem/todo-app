import style from './Button.module.css';

export default function Button({children, ...props}) {
  
  return(
    <button {...props} className={style.button}>{children}</button>
  )
}