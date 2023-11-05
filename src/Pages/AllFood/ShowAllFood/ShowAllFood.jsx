

const ShowAllFood = ({ allDish }) => {
  const { food_name, food_image, price, food_origin, food_category } = allDish;

  return (

    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={food_image} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="card-title">  {food_name} </h2>
        <p>{food_category} </p>
        <p> {food_origin} </p>
        <p>{price} </p>


        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>

  );
};

export default ShowAllFood;