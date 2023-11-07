import { Link } from "react-router-dom";


const ShowAllFood = ({ allDish }) => {
  const { food_name, food_image, price, description, _id, food_origin } = allDish;

  return (

    <div className="card card-side rounded-md bg-base-100 shadow-xl">
      <img className=" h-56 w-56 md:w-72 ml-8 object-center lg:w-96  rounded-xl" src={food_image} alt="food image" />
      <div className="ml-6">
        <h2 className="text-3xl font-bold">  {food_name} </h2>
        <p className="text-xl italic font-semibold " >About Dish: {description} </p>
        <p className="text-2xl italic" > Food Origin :  {food_origin} </p>
        <p className="text-2xl italic " > Dish Price : {price} </p>

        <Link to={`showmenu/${_id}`} >
          <button className="bg-sky-200 py-2 text-2xl w-full rounded-md">Buy Meal</button>
        </Link>
      </div>
    </div>

  );
};

export default ShowAllFood;