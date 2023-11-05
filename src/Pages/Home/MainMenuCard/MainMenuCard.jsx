

const MainMenuCard = ({ menu }) => {

  const { foodName, image, foodCategory, price } = menu;



  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure><img className=" max-w-56 md lg:max-w-96 " src={image} alt="Shoes" /></figure>
      <div className=" bg-emerald-200 " >
        <h2 className="items-center text-4xl font-bold text-center ">{foodName} </h2>
        <div className="flex justify-between " >
          <div className="ml-6" >
            <p className="font-semibold text-2xl" >{foodCategory}</p>
            <p className="text-2xl" >Price: {price} </p>
          </div>
          <button className="bg=sky-200 mr-6 text-xl">See More</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenuCard;