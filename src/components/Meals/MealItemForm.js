
import styles from './MealItemForm.module.css'
import Input from '../UI/Input'
import { useRef,useState } from 'react'

const MealItemForm=(props)=>{

    const inputRef=useRef()
    const [amountIsValid,setAmountIsValid]=useState(true)

    const formSubmitHander=(e)=>{
      e.preventDefault()
      const enteredAmount=inputRef.current.value
      const enteredAmountNumber=+enteredAmount;
      if(enteredAmount.trim().length===0 || enteredAmountNumber <1 || enteredAmountNumber >5){
          setAmountIsValid(false)
          return
      }
      props.onSubmitAmount(enteredAmountNumber)
    }


    return(
        <form className={styles.form} onSubmit={formSubmitHander}>
            <Input
                ref={inputRef}
                label="Amount"
                input={{
                htmlFor:`amount_ + ${props.id}`,
                id:`amount_ + ${props.id}`,
                type:"number",
                min:'1',
                max:'5',
                step:"1",
                defaultValue:"1"
                }}/>
            <button type="submit">+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form>
    )
}

export default MealItemForm