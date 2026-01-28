import "./scss/app.scss";
import React, {useState} from "react";
import Header from "./components/Header";

import {getPizzasArr} from "./services/getPizzas";
import {Home} from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import {NotFound} from "./pages/NotFound";
import {Cart} from "./pages/Cart";


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
                  <Routes>
                      <Route path="/" element={<Home loading={loading} />}/>
                      <Route path="/cart" element={<Cart />} />
                      <Route path="*" element={<NotFound />}/>
                  </Routes>
              </div>
          </div>
      </div>
  );
}

export default App;
