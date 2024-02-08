import './App.css';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState("")

  return( 
		<form>
	    <input type="text" value={text} onChange={(e) => setText(e.target.value.toUpperCase())}></input>
      <button>Очистить ввод</button>
      <p>{text}</p>
	  </form>
	);
}
