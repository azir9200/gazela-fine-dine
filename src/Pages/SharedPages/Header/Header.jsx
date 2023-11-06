import { Link } from "react-router-dom";


const Header = () => {


  const navItems = <>
    <li><Link to="/">Home</Link> </li>
    <li> <Link to="/allFood">All Food</Link> </li>
    <li><Link to="/blogs">My Blogs</Link></li>
    <li> <Link to="/login">Login</Link> </li>
  </>


  return (
    <div>
      <div className="navbar bg-emerald-100 h-28 shadow-xl ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
              {navItems}
            </ul>
          </div>
          <div className=" lg:flex ml-8  gap-8 justify-center items-center   ">
            <div>
              <Link to="/allFood" >
                <img src="https://i.ibb.co/QpBb1JV/gazela.png" className="w-20 h-20 rounded-xl " alt="" />
              </Link>
            </div>
            <div className="">
              <Link to="/allFood" >
                <p className="text-2xl hidden font-bold text-sky-500 lg:flex " >Gazela Fine Dine</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal gap-8 font-semibold text-2xl px-1">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};




export default Header;