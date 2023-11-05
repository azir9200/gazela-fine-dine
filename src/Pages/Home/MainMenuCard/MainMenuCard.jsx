

const MainMenuCard = ({ menu }) => {

  const { foodName, image, foodCategory, price } = menu;



  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">foodName</h2>
        <p>foodCategory</p>
        <p>price</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenuCard;