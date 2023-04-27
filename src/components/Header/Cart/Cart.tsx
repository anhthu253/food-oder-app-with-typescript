import CartItem from "./CartItem";
import React, { MouseEventHandler } from "react";
import useStore from "../../../store/useStore"

const Cart:React.FC<{closeModal:MouseEventHandler<HTMLButtonElement>}> = ({closeModal}) => {
    const orders = useStore(state => state.orders)
    return (
        <>
            <div>
                <ul className="m-0 p-0 max-h-80 overflow-auto">
                    {orders.filter(order => order.amount >0).map(order  => <CartItem key={order.id} {...order}/>)}
                </ul>
            </div>
        
            <div className="flex justify-between mx-0 my-4">
                <h2>Total Amount</h2>
                <h2>${orders.reduce((sum, order)=> sum + order.price * order.amount, 0).toFixed(2)}</h2>
            </div>
            <div className="text-right">
                <button className="button-action text-[#8a2b06] bg-transparent" onClick={closeModal}>Close</button>
                <button className="button-action text-white bg-[#8a2b06]">Order</button>
            </div>
      
        </>
    )
}

export default Cart