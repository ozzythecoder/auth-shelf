import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ShelfPage.css'

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
      <table>
        <thead>
          <tr>
            <th>
            </th>

            <th>
            </th>
            
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          {shelfItems.map((item)=>{
            return (
              <tr 
                key={item.id}>
                <td>{item.description}</td>
                <td className='image-cell'><img src={item.image_url} /></td>
                
                <td>
                  <button
                  onClick={() => handleDelete(item.id)}
                  >
                    Delete Item
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShelfPage;
