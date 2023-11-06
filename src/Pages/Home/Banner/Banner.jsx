import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.imgur.com/9mOpJ6f.jpg" className="w-full bt-rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-6 pl-10 w-1/2'>
              <h2 className='text-6xl font-bold'>Gazela Fine Dine Restaurent</h2>
              <p className="text-2xl" >Step into the world of culinary magic at our award-winning restaurant where our chefs create dishes that are not only delicious, but visually stunning as well.</p>
              <div>
                <Link to="/allFood" > <button className="btn btn-outline btn-primary">Show All Foods</button></Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/2">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* 2nd slide */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/VYcXCWF/Screenshot-20231104-180750-Maps.jpg" className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
              <h2 className='text-6xl font-bold'>Gazela Fine Dine Restaurent</h2>
              <p className="text-2xl" >Step into the world of culinary magic at our award-winning restaurant where our chefs create dishes that are not only delicious, but visually stunning as well.</p>
              <div>
                <Link to="/allFood" >  <button className="btn btn-outline btn-primary">Show All Foods</button></Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/2">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>


        {/* 3rd slide */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/WpwJK9X/slide2.png" className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
              <h2 className='text-6xl font-bold'>Gazela Fine Dine Restaurent</h2>
              <p className="text-2xl" >Step into the world of culinary magic at our award-winning restaurant where our chefs create dishes that are not only delicious, but visually stunning as well.</p>
              <div>
                <Link to="/allFood" >  <button className="btn btn-outline btn-primary">Show All Foods</button></Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/2">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* 4th  slide */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/0YJyntc/slide1png.png" className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
              <h2 className='text-6xl font-bold'>Gazela Fine Dine Restaurent</h2>
              <p className="text-2xl" >Step into the world of culinary magic at our award-winning restaurant where our chefs create dishes that are not only delicious, but visually stunning as well.</p>
              <div>
                <Link to="/allFood" >  <button className="btn btn-outline btn-primary">Show All Foods</button></Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/2">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Banner;