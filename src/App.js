import React, { useState } from 'react'

const App = () => {
  //let name = "My Name Is";
  const [name, setname]=useState(0);
  const changeName = () => {
    setname(name + 1);
  }
  return (
    <div className="container">
      
        <h1>{name}</h1>
        <button className="btn" onClick={changeName}> Click Me </button>
    
    </div>
  )
}

export default App;
