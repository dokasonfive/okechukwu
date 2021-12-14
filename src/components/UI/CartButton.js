
import CartIcon from "../Cart/CartIcon"
import styles from './CartButton.module.css'
import CartContext from "../store/cart-context"
import { useContext,useEffect,useState } from "react"


const CartButton=(props)=>{

    const cartCtx=useContext(CartContext)

    const [highlightButton,setHighlightButton]=useState(false)

    const {items}=cartCtx

    useEffect(()=>{
       if(cartCtx.items.length===0){
           return
       }
        setHighlightButton(true)

        setTimeout(()=>{
            setHighlightButton(false)
        },300)

     }, [items])

    const cartTotalItems=cartCtx.items.reduce((currentNum,item)=>{
        return currentNum+item.amount
    },0)

    const btnClasses=`${styles.button} ${highlightButton ? styles.bump : null}`


    return <button className={btnClasses} onClick={props.onClick}>
        <span className={styles.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={styles.badge}>{cartTotalItems}</span>
    </button>
}

export default CartButton