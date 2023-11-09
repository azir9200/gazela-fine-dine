
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

const ShowMenu = () => {
  const {
    food_name,
    _id,
    food_image,
    price,
    description,
    food_origin,
    food_category,
    made_by,
    ingredients,
  } = useLoaderData();

  const handleBuyMeal = () => {
    axios.get(`https://y-4bwgrg4eq-azir-uddins-projects.vercel.app/mealSale?id=${_id}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col lg:flex-row justify-center items-center m-12">
        <img
          className="h-56 w-56 md:w-72 object-center lg:w-96 rounded-xl"
          src={food_image}
          alt="Food image"
        />
        <div className="text-center mx-auto rounded-xl shadow-xl p-6 lg:p-8 mt-6 lg:mt-0">
          <h2 className="text-3xl font-bold mb-4">Dish Name: {food_name}</h2>
          <p className="text-xl italic font-semibold mb-4">
            About Dish: {description}
          </p>
          <p className="text-2xl italic mb-4">Food Origin: {food_origin}</p>
          <p className="text-2xl italic mb-4">Food Category: {food_category}</p>
          <p className="text-2xl italic mb-4">
            Ingredients: {ingredients.join(", ")}
          </p>
          <p className="text-2xl italic mb-4">Prepared by: {made_by}</p>
          <p className="text-2xl italic mb-4">Dish Price: {price}</p>

          <Link to={`/orderInfo/${_id}`}>
            <button
              onClick={handleBuyMeal}
              className="bg-sky-300 py-2 px-8 text-2xl rounded-md"
            >
              Confirm Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowMenu;
