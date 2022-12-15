import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddToShelf() {

  const dispatch = useDispatch();

  const [descriptionIn, setDescriptionIn] = useState("");
  const [imageUrlIn, setImageUrlIn] = useState("");

  // user clicks submit button
  function handleSubmit(event) {
    event.preventDefault(); // prevent refresh
    console.log("in handleSubmit!", descriptionIn, imageUrlIn);

    // input validation
    if(descriptionIn == '' || imageUrlIn == '') {
      alert('All fields are required.')
      return false;
    }

    // dispatch data
    
  }

  return (
    <div className="addToShelf">
      <p>ADD A NEW BOOK TO THE SHELF</p>
      <form>
        <input
          placeholder="Description"
          value={descriptionIn}
          onChange={(event) => setDescriptionIn(event.target.value)}
        />
        <input
          placeholder="Image URL"
          value={imageUrlIn}
          onChange={(event) => setImageUrlIn(event.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit Book
        </button>
      </form>
    </div>
  );
}
