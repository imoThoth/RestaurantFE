import './App.css';
import data from './data.js';
import Routing from './components/routes/Routing.js';
import React, {useState} from 'react';


const App = () => {

    const {products} = data;  
     const [cartItems, setCartItems] = useState([]);

    
    const handleAddProduct = (products) => {
       
          const ProductExist = cartItems.find((item) => item.id === products.id);
        console.log("Products Exist " + ProductExist);
        if(ProductExist){
        
            setCartItems(
                cartItems.map( (item) =>
                 item.id === products.id ? 
            {...ProductExist, quantity: ProductExist.quantity + 1} 
            : item
                )
            );
            }else{
                setCartItems([...cartItems, {...products, quantity: 1}])
                console.log([cartItems])
            }
        }

    const handleRemoveProduct = (products) => {
        const ProductExist = cartItems.find( (item) => item.id === products.id);
        if(ProductExist.quantity === 1){
          setCartItems(cartItems.filter ( (item) => item.id !== products.id));
        }else{
          setCartItems(
              cartItems.map( (item) => item.id === products.id ? {...ProductExist, quantity: ProductExist.quantity -1}
              : item)
          )
        }
    }




  return (
      <div>
        <Routing 
        products={products} 
        cartItems={cartItems} 
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct} />
      </div>
 
  );
}

export default App;
