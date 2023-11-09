import { useEffect, useState } from "react";
import ShowAllFood from "./ShowAllFood/ShowAllFood";

const AllFood = () => {
  const [allDishes, setAllDishes] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://y-4bwgrg4eq-azir-uddins-projects.vercel.app/allDishes")
      .then((res) => res.json())
      .then((data) => setAllDishes(data));
  }, []);

  const filteredDishes = allDishes.filter((dish) => {
    return (
      dish.food_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <div>
      <h1 className="my-16 font-bold text-4xl text-center">
        Search For Your Favorite Food
      </h1>
      <div className="mb-3">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 -mr-0.5 block w-full min-w-0 flex-auto rounded-l-md border-2 border-primary bg-white px-3 py-2 text-base font-normal leading-6 outline-none focus:z-3 focus:border-primary focus:shadow-inset-0.5 focus:outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600"
            placeholder="Search"
            aria-label="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-6">
        {filteredDishes.map((allDish) => (
          <ShowAllFood key={allDish.id} allDish={allDish}></ShowAllFood>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
