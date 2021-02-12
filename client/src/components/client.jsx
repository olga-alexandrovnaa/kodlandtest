import React from 'react';
import ProductsList from './ProductsList'

function Client(props) {
  const { products } = props;
  return (
    <div>
          <ProductsList products={products}/>
    </div>
  );
}

export default Client;
