
import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  // const [deletedToy, setDeletedToy] = ([])


  useEffect(() => {
  fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(toys => setToys(toys))
  }, [])

  console.log(toys)

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const addNewToy = (newToy) => {
    setToys([...toys, newToy])
  }

  const handleDelete = (itemToDelete) => {
    let filteredToys = toys.filter(toy => toy.id !== itemToDelete.id)
    setToys(filteredToys)
    fetch(`http://localhost:3001/toys/${itemToDelete.id}`, {method: "DELETE"})
  }







  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleDelete}  />
    </>
  );
}

// const handleDelete = (itemToDelete) => {
//   let filteredToys = toys.filter(toy => toy.id !== itemToDelete.id)
//   setToys(filteredToys)

//   fetch(`http://localhost:3001/toys/${itemToDelete.id}`, {method: "DELETE"} )
// }
 

  //     fetch(`http://localhost:3001/toys/${deletedToy.id}`, {method: "DELETE"} )

  // }


// handleDelete={handleDelete}
// deletedToy={deletedToy} setDeletedToy={setDeletedToy}

export default App;



//put toy cards on page 
//grab state and useEffect d 
//declare variables d 
//fetch w/useEffect (console.log) d
//setState in fetch (console.log) d
//pass down props to ToyContainer , accept props d
//map toys in ToyContainer into cards d