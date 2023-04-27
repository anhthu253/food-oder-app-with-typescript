import MealImage from "../../assets/meals.jpg"
import HeaderCart from "./HeaderCart";
const Header = () =>{
    return (
        <>
            <header className="fixed inset-x-0 top-0 bg-[#8a2b06] text-white flex justify-between
            items-center px-1/10 py-0">
                    <h1>React Meals</h1>
                    <HeaderCart/>
            </header>
            <div className="h-[25rem]">
                <img className="object-cover w-full h-full" src={MealImage} alt="Meal"/>
            </div>
        </>
    )
    
}
export default Header;