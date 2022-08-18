import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDelete }) {
  return (
    <div id="toy-collection">{toys.map(toy => <ToyCard key={toy.id} toy={toy} handleDelete={handleDelete}  />)}</div>
  );
}
// handleDelete={handleDelete}
export default ToyContainer;

// setDeletedToy={setDeletedToy} deletedToy={deletedToy}

// "id": 1,
// "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
// "likes": 8,
// "name": "Woody"

// {
//   "id": 1,
//   "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//   "likes": 8,
//   "name": "Woody"
// },

// deletedToy, setDeletedToy