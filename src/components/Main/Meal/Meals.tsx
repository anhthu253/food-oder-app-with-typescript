import MealItem from "./MealItem"
import useStore from "../../../store/useStore"
const Meals = () => {
    const orders = useStore(state => state.orders)
    return (
        <section className="p-4 mx-auto my-8 shadow-[0_2px_8px_rgba(0,0,0,0.25)] rounded-[14px] bg-white max-w-[60rem] w-[90%]">
            <ul>{orders.map(meal => <MealItem key={meal.id} {...meal}/>)}</ul>
        </section>
        
    )
    
}

export default Meals