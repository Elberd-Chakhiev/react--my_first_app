import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";


const Home = () =>
{

    const [pizzaItems, setPizzaItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
  
    React.useEffect(() => 
      {
        fetch('https://62b483bcda3017eabb0c3fd6.mockapi.io/items')
        .then(res => { return res.json() })
        .then(piz => { setPizzaItems(piz); setIsLoading(false) });
        window.scrollTo(0, 0);
      }, 
      []
    );

    return(
        <>
        <div className="content__top">
          <Categories />
          <Sort />
        </div>

        <h2 className="content__title">Все пиццы</h2>
        
        <div className="content__items">

          {
            isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index} />) :
             pizzaItems.map(obj => (
            <PizzaBlock 
              title={obj.title} 
              price={obj.price}
              image={obj.imageUrl}
              sizes={obj.sizes}
              types={obj.types}
              key={obj.id} 
            />)  
            ) 
          }

        </div>
        </>
    );
}
export default Home;
