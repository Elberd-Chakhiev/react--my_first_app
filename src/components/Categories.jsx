import React from "react";

const Categories = () =>
{

  const [activeIndexCategory, setActiveIndexCategory] = React.useState(0);

  const categories = 
  [
   'Все',
   'Мясные',
   'Вегетарианская',
   'Гриль',
   'Острые',
   'Закрытые',
  ];

  const onclickCategory = (index) => 
  {
    setActiveIndexCategory(index);
  }

  return(
    <div className="categories">
    <ul>
      {
        categories.map((value, i) => 
        {
          return(
            <li 
              onClick={() =>  onclickCategory(i)} 
              className={activeIndexCategory === i ? 'active' : ''} 
              key={i} >
              {value}
            </li>
          );
        })
      }
    </ul>
  </div>
  );
}

export default Categories;