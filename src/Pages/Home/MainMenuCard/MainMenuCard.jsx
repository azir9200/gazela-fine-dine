import { Link } from "react-router-dom";


const MainMenuCard = ({ menu }) => {

  const { foodName, _id, image, foodCategory, price } = menu;



  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure><img className=" max-w-56 md lg:max-w-96 " src={image} alt="Shoes" /></figure>
      <div className=" bg-emerald-200 " >
        <h2 className="items-center text-4xl font-bold text-center ">{foodName} </h2>
        <div className="flex justify-between " >
          <div className="ml-6" >
            <p className="font-semibold text-2xl" >{foodCategory}</p>
            <p className="text-xl" >Price: {price} </p>
          </div>
          {/* <Link to={`/foodCategory/${food_category}`} > */}
          <Link to={`/foodCategory/${_id}`} >
            <button className="bg-sky-300 rounded-s-2xl mr-6 font-semibold text-2xl">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenuCard;