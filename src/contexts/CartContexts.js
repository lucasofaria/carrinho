import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

function CartProvider({ children }){
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function addItemCart(newItem){
    const indexItem = cart.findIndex(item => item.id === newItem.id)

    
    if(indexItem !== -1){ //Se o item já estiver na lista vai entrar no if e adicionamos +1
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1; // Somando + 1

      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price; //Recalculando o total

      setCart(cartList)
      totalResultCart(cartList)

      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }

    setCart(produtos => [...produtos, data])
    totalResultCart([...cart, data])

  }

  function reduceItemCart(produtos){
    const indexItem = cart.findIndex(item => item.id === produtos.id)

    if(cart[indexItem]?.amount > 1){
      let cartList = cart;
  
      cartList[indexItem].amount = cartList[indexItem].amount - 1; // Diminuindo -1
  
      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price; // Recalculando o total
    
      setCart(cartList)
      totalResultCart(cartList)
      return;
    }

    const removeItem = cart.filter(item => item.id !== produtos.id)
    setCart(removeItem);
    totalResultCart(removeItem);
    
  }

  function totalResultCart(items){
    let myCart = items;
    let result = myCart.reduce((acc, obj) => { return acc + obj.total },0)

    setTotal(result.toFixed(2))
  }

  return(
    <CartContext.Provider
      value={{
        cart,
        addItemCart,
        reduceItemCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;