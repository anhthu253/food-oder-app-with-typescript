import CartIcon from "./CartIcon";
import Cart from "./Cart/Cart";
import Modal from "../UI/Modal";
import { useState } from "react";
import useStore from "../../store/useStore";
const HeaderCart = ()=>{
    const [toggleModal, setToggleModal] = useState(false)
    const orders = useStore(state => state.orders)
    return (
        <>
            {toggleModal && <Modal closeModal={()=>setToggleModal(false)}><Cart closeModal={()=>setToggleModal(false)}/></Modal>}
            <button className="bg-[#4d1601] px-12 py-3 font-inherit font-bold text-inherit border-none rounded-[25px]
            flex justify-around items-center cursor-pointer" onClick={()=>setToggleModal(true)}>
                <span className="mr-2"><CartIcon/></span>
                <span>Your Cart</span>
                <span className="bg-[#b94517] px-4 py-1 rounded-[25px] ml-4 font-bold">{orders.reduce((sum, order)=> sum+order.amount,0)}</span>
            </button>
        </>
        
    )
}
export default HeaderCart;