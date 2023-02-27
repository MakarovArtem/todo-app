import {useState} from 'react';

export default function useInput(initalvalue) {

  let [value, setValue] = useState(initalvalue);

  const onChange = (e) => {
    setValue(e.target.value)
  };

  return {value, onChange, setValue}
}