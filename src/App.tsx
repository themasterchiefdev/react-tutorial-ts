import React, {useState} from 'react';
import './App.css';

const App = () => (
    <div className="App">
        <Button />
    </div>
);

function Button(){
    const [counter,setCounter]=useState(0);
    return <button onClick={()=>setCounter((counter+1)*2)} >{counter}</button>
}

export default App;
