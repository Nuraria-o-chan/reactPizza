import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaSkeleton";
import Sort from "../components/Sort";
import Categories from "../components/Categories";

import pizzasJson from "../pizzas.json"

export const Home = ({loading}) => {


    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    loading ? (
                        [...new Array(8)].map((_ , idx) => <PizzaSkeleton key={idx}/>)
                    ) : (
                        pizzasJson.map(pizza => (
                            <PizzaBlock key={pizza.id} {...pizza}/>
                        ))
                    )
                }
            </div>
        </>
    )
}