// import hooks
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function AddToShelf() {

  // initialize hooks
  const dispatch = useDispatch();
  const history = useHistory();

  // local state variables
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
    dispatch({
      type: 'ADD_NEW_ITEM',
      payload: {
        description: descriptionIn,
        image_url: imageUrlIn
      }
    })

    // clear inputs
    setDescriptionIn('');
    setImageUrlIn('');
    
    // move user to shelf
    history.push('/shelf');
  }

  return (
    <div className="container">
      <h2>ADD A NEW ITEM TO THE SHELF</h2>
      
      <form>
        
        {/* Description Input */}
        <input
          placeholder="Description"
          value={descriptionIn}
          onChange={(event) => setDescriptionIn(event.target.value)}
        />

        {/* Image URL Input */}
        <input
          placeholder="Image URL"
          value={imageUrlIn}
          onChange={(event) => setImageUrlIn(event.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Add Item
        </button>
      </form>
    </div>
  );
}
