// ShoesList.js
import React from 'react';

function ShoesList({ shoes }) {
  return (
    <div className="shoes-list">
      {shoes.map(shoe => (
        <div key={shoe.id} className="shoe-item">
          <img src={shoe.image} alt={shoe.name} />
          <h2>{shoe.name}</h2>
          <p>Price: ${shoe.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ShoesList;
