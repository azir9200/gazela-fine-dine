import { Link } from "react-router-dom";


const ButtonAll = () => {
  return (
    <div>

      {/* <p className="text-3xl text-center font-medium" >Please visit our all dishes to get the real taste.</p> */}

      <div className="flex  justify-center" >

        <Link to="/allFood">

          <button
            className="middle none center rounded-lg bg-sky-100 py-3  text-3xl font-semibold uppercase text- shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none my-8 "
            data-ripple-light="true" >
            See All Dishes
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ButtonAll;