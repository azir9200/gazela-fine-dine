import { Outlet } from "react-router-dom";
import Header from "../Pages/SharedPages/Header/Header";
import Footer from "../Pages/SharedPages/Footer/Footer";


const Main = () => {
  return (
    <div>
      <h1 className="text-red-700">Main layout</h1>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;