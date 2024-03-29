import React from 'react';

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    cartNumber:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    updateItemQuantity:(item)=>{}
});

export default CartContext;