import React from "react"
import Image from '../assets/MealsImage.PNG'
import styles from './Header.module.css'
import CartButton from "../UI/CartButton"

const Header=(props)=>{ 

  return(
      <React.Fragment>
          <header className={styles.header}>
              <h1>ReactMeals</h1>
              <CartButton onClick={props.onShowCart} />
          </header>
          <div className={styles["main-image"]}>
              <img src={Image} alt="Table full of delicious food"/>
          </div>
      </React.Fragment>
  )
}

export default Header