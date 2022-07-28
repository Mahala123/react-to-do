import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("")
  const [list, setList] = useState([]);
 
  
  const addElem = (e) => {
     e.preventDefault()
    if(!text)
    {

    }
    else
    {
      setList(() => [...list, text]);
      setText('')
    }
    
    //console.log(list)
  };
  const deleteTodo = (id) => {
    const updatedItem=list.filter((td,index)=>{
    return index !==id
     } )
     setList(updatedItem)
  };
  return (
    <div className="app">
      <header className="hlist1">
        <h2>ToDoList</h2>
      </header>
      <form onClick={addElem}>
        <label className="llabel">what do you want to do today?</label>
        <br />
        <input
          value={text}
           onChange={(event) => setText(event.target.value)}
           className="input"
          type="text"
        />
        <button className="button">Submit</button>
      </form>
      {list.map(
        (td, index) =>{
          return(
            <div key={index}>
              <br />
              <div >
                <input type="checkbox" />
                <label>{td}</label>
              <button  key={index}
              onClick={()=>deleteTodo(index)}
              
              className="button">delete</button>
            </div>
            </div>
          
            )}
            
      )}
    </div>
  );
}

export default App;
