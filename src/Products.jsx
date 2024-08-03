import React from 'react';
import Product from './Product';
import './App.css'

function Products({ data }) { // Correctly destructuring props

  return (
    <div className='R60'>
      {data.map((item) => ( // Make sure to return the JSX
        <Product data={item} key={item.id} />
      ))}
    </div>
  );
}

export default Products;
