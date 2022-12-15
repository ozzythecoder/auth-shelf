// import e from "express";
import { useState } from "react";


export default function AddToShelf (){

    const [descriptionIn, setDescriptionIn] = useState('');
    const [imageUrlIn, setImageUrlIn] = useState('');


    // function 


    return (
        <div className="addToShelf">
            <p>ADD A NEW BOOK TO THE SHELF</p>
            <form>
                <input placeholder="Description" value={descriptionIn} onChange={event => setDescriptionIn(event.target.value)}/>
                <input placeholder="Image URL" value={imageUrlIn} onChange={event => setImageUrlIn(event.target.value)}/>
                <button type="submit">Submit Book</button>



            </form>
        </div>
    )




}