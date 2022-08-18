import React, {useState} from "react";

function ToyCard({toy, handleDelete}) {

  // deletedToy, setDeletedToy

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleDelete(toy)}>Donate to GoodWill</button>
    </div>
  );
}
// {/* <button onClick={() => removeFromReorderInventory(item)}> Delete </button> */}


export default ToyCard;
