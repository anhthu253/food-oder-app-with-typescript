import React from "react"
import Meal from "../../../interface/Meal"

const CartItem:React.FC<Meal>= ({id,name,price,amount}) => {
    return (
        <li className="flex justify-between items-center m-4 pb-4 border-b border-b-solid border-b-[#8a2b06]">
            <div>
                <h2 className="mb-2 text-[#363636]">{name}</h2>
                <div className="flex justify-between items-center w-40">
                    <span className="mt-1 font-bold text-[#ad5502] text-xl">${price}</span>
                    <span className="border-1 border-solid border-[#ccc] round-md text-[#363636] font-bold py-1 px-3">x {amount}</span>
                </div>
            </div>
            <div>
                {['-','+'].map(label => <button className="w-12 border border-solid border-[#8a2b06]
                rounded-md m-1 font-inherit font-bold text-xl">{label}</button>)}
            </div>
        </li>
    )
}
export default CartItem