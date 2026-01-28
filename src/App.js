import "./scss/app.scss";
import React, {useState} from "react";
import PizzaBlock from "./components/PizzaBlock";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Header from "./components/Header";

import pizzasJson from "./pizzas.json";
import {getPizzasArr} from "./services/getPizzas";
import PizzaSkeleton from "./components/PizzaSkeleton";

function App() {
    const [loading, setLoading] = useState(false);

    React.useEffect( () => {
       const loadData = async () => {
           setLoading(true);
           try {
               const res = await getPizzasArr();
               console.log(res);
           }catch(err) {
               console.log(err);
           }finally {
               setLoading(false);
           }

       }
       loadData();

    }, [])

  return (
      <div className="wrapper">
         <Header />
          <div className="content">
              <div className="container">
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
              </div>
          </div>
      </div>
  );
}

export default App;
