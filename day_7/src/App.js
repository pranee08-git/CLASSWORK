
import React from 'react';

import { WithProductList } from './WithProductList';

import ProductListComponent from './ProductListComponent';

 

const Products = [

  { id: 1, name: 'Product 1', price: 19.99, imageUrl: 'product1.jpg' },

  { id: 2, name: 'Product 2', price: 29.99, imageUrl: 'product2.jpg' },

];

 

const EnhancedProductList = WithProductList(ProductListComponent, Products);

 

const App = () => {

  return (

    <div>

      <h1>Your App Title</h1>

      {/* Render the enhanced ProductListComponent */}

     <EnhancedProductList />

    </div>

  );

};

 

export default App;

 

 

ProductListComponent.js

 

 

import React from 'react';

 

const ProductListComponent = ({ productList }) => {

  return (

    <ul>

      {productList.map((product) => (

        <li key={product.id}>

          <div>{product.name}</div>

          <div>${product.price.toFixed(2)}</div>

        </li>

      ))}

    </ul>

  );

};

 

export default ProductListComponent;

 

 

WithProductList.js

 

import React from 'react';

 

export const WithProductList = (WrappedComponent, productList) => {

  return () => <WrappedComponent productList={productList} />;

};
