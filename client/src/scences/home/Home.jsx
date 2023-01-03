import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";

const Home = () => {
    return (
        <div>
            <div className="home">
                <MainCarousel />
                <ShoppingList />
                <Subscribe />
            </div>
        </div>
    )
}

export default Home;