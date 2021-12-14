import CartContext from "./cart-context"
import { useReducer } from "react"
import { act } from "react-dom/test-utils"

const defaultCartItems={
    items:[],
    totalAmount:0
}

const cartReducer=(state,action)=>{
    switch(action.type){
      case "ADD":
        const updatedTotal=state.totalAmount +action.payload.amount *action.payload.price
        const existingCartItemIndex=state.items.findIndex(item=>item.id===action.payload.id)
        const existingCartItem= state.items[existingCartItemIndex]
        let updatedItems;
        if(existingCartItem){
          const updatedItem={
              ...existingCartItem,
              amount:existingCartItem.amount + action.payload.amount
          };
          updatedItems=[...state.items]
          updatedItems[existingCartItemIndex]=updatedItem
        }else{
            updatedItems=state.items.concat(action.payload)
        }
          return{
            items:updatedItems,
            totalAmount:updatedTotal
          }
      case "REMOVE":
          const existingItemIndex=state.items.findIndex(item=>item.id===action.payload);
          const existingItem=state.items[existingItemIndex];
          const updatedTotalAmount=state.totalAmount - existingItem.price;
          let updated_item;
          let updated_items;

          if(existingItem.amount===1){
            updated_items=state.items.filter(item=>item.id !==action.payload)
          }else{
             updated_item={
                 ...existingItem,
                 amount:existingItem.amount -1
             }

             updated_items=[...state.items]
             updated_items[existingItemIndex]=updated_item
          }
          
          return{
            items:updated_items,
            totalAmount:updatedTotalAmount
          }

     default:
         return state
    }

}

const CartProvider=(props)=>{

   const [cartState,dispatchCartAction]= useReducer(cartReducer,defaultCartItems)

    const addItemHandler=(item)=>{
        dispatchCartAction({type:"ADD", payload:item})
    }
    const removeItemHandler=(id)=>{
        dispatchCartAction({type:"REMOVE",payload:id})
    }

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }

    return(
        <CartContext.Provider value={cartContext}>
         {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider

