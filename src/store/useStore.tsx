import {create} from "zustand"
import meals from "../db/Meals"
import Meal from "../interface/Meal"

const useStore = create<{
    orders:Meal[],
    addOrder: (id:string) => void,
    reduceOrder: (id:string) => void,
    setOrder:(id:string,amount:number) => void
}>(set => {
    return {
        orders:meals,
        addOrder:(id)=>{
            set(state => {
                const updatedOrders = state.orders.map(order => order.id===id?{...order,amount:order.amount+1}:order)
                return {orders:updatedOrders}
            })
        },
        reduceOrder:(id)=>{
            set(state => {
                const updatedOrders = state.orders.map(order => order.id===id?{...order,amount:order.amount-1}:order)
                return {orders:updatedOrders}
            })
        },
        setOrder:(id,amount) =>{
            set(state => {
                const updatedOrders = state.orders.map(order => order.id===id?{...order,amount:amount}:order)
                return {orders:updatedOrders}
            })
        }
    }
    
})
export default useStore