import Input from "../../UI/Input"
import React, {useState, useRef,useEffect} from "react"
import Meal from "../../../interface/Meal"
import useStore from "../../../store/useStore"

const MealItem:React.FC<Meal>= ({id,name,description,price,amount}) => {
    const [enteredInputAmount, setEnterInputAmount]=useState(amount)
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef= useRef(null)
    const setOrder = useStore(state => state.setOrder)
    const addOrder = useStore(state => state.addOrder)

    useEffect(()=>{
        setEnterInputAmount(amount)
    },[amount])

    const handleOnChange =(event:React.FormEvent<HTMLInputElement>) =>{
        const enteredAmount = Number((event.target as HTMLInputElement).value)
        setEnterInputAmount(enteredAmount);
        if(enteredAmount < 0 || enteredAmount > 5)
            setAmountIsValid(false)
        else{
            setAmountIsValid(true)
            setOrder(id,enteredAmount)
        }
    }

    const handleSubmit = (event:React.FormEvent) =>{
        event.preventDefault();
        if(amountIsValid) addOrder(id)
        
    }

    return (
        <li className="flex justify-between items-center m-4 pb-4 border-b border-b-solid border-b-[#ccc]">
            <div>
                <h3 className="mb-1">{name}</h3>
                <div className="font-italic">{description}</div>
                <div className="mt-1 font-bold text-[#ad5502] text-xl">${price}</div>
            </div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <Input className="self-end" ref={amountInputRef} id="amount" label="Amount" type="number" value={enteredInputAmount} 
                isValid={amountIsValid}
                onChange={handleOnChange}
                />
                <button className="cursor-pointer bg-[#8a2b06] border-none text-white px-8 py-1 rounded-[20px] 
                font-bold self-end mt-2">+Add</button>
                {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
            </form>
        </li>
    )
}
export default MealItem