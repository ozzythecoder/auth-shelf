import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function ShelfPage() {
  
  const dispatch = useDispatch();
  const shelfItems = useSelector(store => store.itemsReducer)
  console.log(shelfItems);
  
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_ITEMS' });
  }, []);

  const handleDelete = (idToDelete) => {
    console.log(idToDelete)
    dispatch({ type: 'DELETE_ITEM', payload: { id: idToDelete } })
  }

  
  return (
    <div className="container">
      <h2>Shelf</h2>
      {shelfItems.map((item)=>{
        return (
          <div key={item.id}>
            <p>{item.description}</p>
            <img src={item.image_url} />
            <button
              onClick={() => handleDelete(item.id)}
              >
              Delete Item
            </button>
          </div>
        )
  })}
    </div>
  );
}

export default ShelfPage;
