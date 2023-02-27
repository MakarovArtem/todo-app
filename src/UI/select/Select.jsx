import style from './Select.module.css';

export default function Select({options, defaultOption, value, onChangeCallback}) {

  return(
    <select
      className={style.select}
      value={value} 
      onChange={(e) => onChangeCallback(e.target.value)}
    >
      <option disabled className={style.option}>{defaultOption}</option>
      {
        options.map((option) => <option key={crypto.randomUUID()} value={option.value}>{option.name}</option>)
      }
    </select>
  )
}