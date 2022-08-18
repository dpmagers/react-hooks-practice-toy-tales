// When the ToyForm is submitted, make a POST request to /toys 
// to save a new toy to the server. Using the ideas of controlled 
// form and inverse data flow, think about how to render a new 
// ToyCard for the toy that you created.

//1 set state in form d
//2 declare variables for each input d
//3 add value to each input d
//4 add onChange to each input d
//5 put onSubmit on form d
//6 create submit handler d
// 7 declare new toy in handler d
// 8 create post for new toy (console.log)
// 9 create addNewToy handler in parent 

import React, {useState} from "react";

function ToyForm({addNewToy}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [likes, setLikes] = useState(0)


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e)

    let newToy = {
      name: name,
      image: image,
      likes: likes
    }

    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(addNewToy(newToy))
  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={submitHandler}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
