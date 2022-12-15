import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function ShelfPage() {
  
  const dispatch = useDispatch();
  const shelfItems = useSelector(store => store.itemsReducer)
  console.log(shelfItems);
  
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_ITEMS' });
  }, []);

  

  
  return (
    <div className="container">
      <h2>Shelf</h2>
      {shelfItems.map((item)=>{
        return (
          <div key={item.id}>
            <p>{item.description}</p>
            <img src={item.image_url} />
          </div>
        )
  })}
    </div>
  );
}

export default ShelfPage;
