import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";


const ShowMenu = () => {
  const { food_name, _id, food_image, price, description, food_origin, food_category, made_by, ingredients } = useLoaderData();


  const handleBuyMeal = () => {
    axios.get(`http://localhost:5000/mealSale?id=${_id}`)
  }

  return (
    <div >
      <div className="flex flex-col lg:flex-row justify-center m-12 items-center">
        <img className=" h-56 w-56 md:w-72  object-center lg:w-96 rounded-xl" src={food_image} alt="Food image" />
        <div className=" text-center  mx-auto rounded-xl  shadow-xl ">

          <h2 className="text-3xl font-bold">Dish Name :  {food_name} </h2>
          <p className="text-xl italic font-semibold " >About Dish: {description} </p>
          <p className="text-2xl italic" > Food Origin :  {food_origin} </p>

          <p className="text-2xl italic" > Food Category :  {food_category} </p>

          <p className="text-2xl italic" > Ingredients :  {ingredients} </p>

          <p className="text-2xl italic" > Prepared by    {made_by} </p>

          <p className="text-2xl italic " > Dish Price : {price} </p>

          <Link  >
            <button onClick={handleBuyMeal} className="bg-sky-300 py-2 px-8 text-2xl rounded-md">Confirm Order</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ShowMenu;