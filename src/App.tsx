import Header from './components/Header/Header';
import MealSummary from './components/Main/MealSummary';
import Meals from './components/Main/Meal/Meals';
function App() {
  return (
    <>
      <Header/>
      <main>
        <MealSummary/>
        <Meals/>
      </main>
    </>
  );
}

export default App;
