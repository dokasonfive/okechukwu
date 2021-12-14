import styles from './Cart.module.css'
import Modal from "../UI/Modal"
import { useContext } from 'react'
import CartContext from '../store/cart-context'
import CartItem from './CartItem'

const Cart=(props)=>{

    const cartCtx=useContext(CartContext)

    const cartItemRemoveHandler=(id)=>{
        cartCtx.removeItem(id)

    }
    const cartItemAddHandler=(item)=>{
        cartCtx.addItem({...item,amount:1})
    }

    const cartItemList=cartCtx.items.map(item=><CartItem price={item.price} amount={item.amount} name={item.name} onAdd={cartItemAddHandler.bind(null,item)} onRemove={cartItemRemoveHandler.bind(null,item.id)} />)

    return(
        <Modal onClose={props.onClose}>
            <ul className={styles['cart-items']}>
            {cartItemList}
            </ul>
            <div  className={styles.total}>
            <span>Total Amount</span>
            <span>{cartCtx.totalAmount.toFixed(2)}</span>
            <div className={styles.actions}>
             <button onClick={props.onClose} className={styles["button--alt"]}>Close</button>
             <button className={styles.button}>Order</button>
            </div>
            </div>
        </Modal>
    )
}

export default Cart