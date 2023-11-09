import { Link } from "react-router-dom";

const MainMenuCard = ({ menu }) => {
  const { food_name, _id, food_image, food_category, price } = menu;

  console.log(food_name);

  return (
    <div
      className="card card-compact 
            border-8  bg-base-100 shadow-xl "
    >
      <figure className="object-fit object-cover">
        <img
          className=" h-56  w-56 md:w-72 ml-8 object-center lg:w-96  rounded-xl"
          src={food_image}
          alt="Shoes"
        />
      </figure>
      <div className=" bg-emerald-200 ">
        <h2 className="items-center text-4xl font-bold text-center ">
          {" "}
          {food_name}{" "}
        </h2>
        <div className="flex justify-between ">
          <div className="ml-6">
            <p className="font-semibold text-2xl">
              Category of Food: {food_category}
            </p>
            <p className="text-xl">Price: {price} </p>
          </div>

          <Link to={`http://localhost:5173/allFood/showmenu/${_id}`}>
            <button className="bg-sky-300 rounded-s-2xl mr-6 font-semibold text-2xl">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenuCard;
