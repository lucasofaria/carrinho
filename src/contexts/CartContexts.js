import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

function CartProvider({ children }){
  const [cart, setCart] = useState([]);

  function addItemCart(newItem){
    const indexItem = cart.findIndex(item => item.id === newItem.id)

    
    if(indexItem !== -1){ //Se o item já estiver na lista vai entrar no if e adicionamos +1
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1; // Somando + 1

      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price; //Recalculando o total

      setCart(cartList)
      console.log(cartList)
      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }

    setCart(produtos => [...produtos, data])
  }

  return(
    <CartContext.Provider
      value={{
        cart,
        addItemCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;