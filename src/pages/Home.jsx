import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaSkeleton";
import Sort from "../components/Sort";
import Categories from "../components/Categories";

import React from "react";
import {getPizzasArr} from "../services/getPizzas";
import {useState} from "react";

export const Home = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
        name: "популярности", sortProperty: "rating",
    });

    React.useEffect( () => {
        const loadData = async () => {
            setLoading(true);
            try {
                const res = await getPizzasArr({categoryId, sortType});
                setItems(res);
                console.log(res);
            }catch(err) {
                console.log(err);
            }finally {
                setLoading(false);
            }

        }
        loadData();

    }, [categoryId, sortType]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryValue={categoryId} onClickCategory={(idx) => setCategoryId(idx)} />
                <Sort sortValue = {sortType} onClickSortType={(idx) => setSortType(idx)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    loading ? (
                        [...new Array(8)].map((_ , idx) => <PizzaSkeleton key={idx}/>)
                    ) : (
                        items.map(pizza => (
                            <PizzaBlock key={pizza.id} {...pizza}/>
                        ))
                    )
                }
            </div>
        </div>
    )
}