

const ShowAllFood = ({ allDish }) => {
  const { food_name, food_image, price, description, food_origin, food_category } = allDish;

  return (

    <div className="card card-side rounded-md bg-base-100 shadow-xl">
      <img className="w-56" src={food_image} alt="Movie" />
      <div className="card-body">
        <h2 className="text-3xl font-bold">  {food_name} </h2>
        <p className="text-xl italic font-semibold " >About Dish: {description} </p>
        <p className="text-2xl italic" > Food Origin :  {food_origin} </p>
        <p className="text-2xl italic " > Dish Price : {price} </p>
        <button className="bg-sky-100 py-2 text-2xl rounded-md">Buy Food</button>
      </div>
    </div>

  );
};

export default ShowAllFood;