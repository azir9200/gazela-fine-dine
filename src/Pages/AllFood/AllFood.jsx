import { useEffect, useState } from "react";
import ShowAllFood from "./ShowAllFood/ShowAllFood";


const AllFood = () => {

  const [allDishes, setAllDishes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allDishes')
      .then(res => res.json())
      .then(data => setAllDishes(data));
  }, [])

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 my-6 " >
        {
          allDishes.map(allDish => <ShowAllFood
            key={allDish.id}
            allDish={allDish}
          ></ShowAllFood>)
        }
      </div>
    </div>
  );
};

export default AllFood;