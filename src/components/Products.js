import React from 'react';
import "../css/products.css";

const Products = ({products, handleAddProduct}) => {

  return (
    <div className='products'>
      {
          products.map( (item) => (
              <div className='card' key={item.id}> 
                <div> 
                    <img 
                    className='product-image'
                    src={item.image}
                    alt={item.name}
                    />
                </div>
                <div> 
                    <h3 className='product-name'>{item.name}</h3>
                </div>
                <div> 
                    <h3 className='product-name'>£{item.price}</h3>
                </div>
                <div> 
                <button 
                    className='product-add-button'
                    onClick={() => handleAddProduct(item)}>
                    Add to Cart</button>
                </div>               
              </div>
          ))
      }
    </div>
  )
}

export default Products
