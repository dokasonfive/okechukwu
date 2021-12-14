import React,{useContext} from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

import CartContext from "../store/cart-context";

const Meals=()=>{
    const cartCtx=useContext(CartContext)
    console.log(cartCtx)
    return(
        <React.Fragment>
            <MealsSummary />
            <AvailableMeals />
        </React.Fragment>
    )
}

export default Meals

