import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";


const Footer = () => {
  return (

    <footer className="footer  p-10 bg-neutral text-neutral-content">
      <nav >
        <Link to="/allFood">
          <img src="https://i.ibb.co/QpBb1JV/gazela.png" className="w-32 ml-8 rounded-md h-32" alt="" />
          <p className="text-2xl font-bold " >Gazela Fine Dine</p> </Link>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
        <div className="flex gap-6" >
          <a className="link link-hover text-2xl"><FaFacebook></FaFacebook>  </a>
          <a className="link link-hover text-2xl"><FaGoogle></FaGoogle>  </a>
          <a className="link link-hover text-2xl"><FaGithub></FaGithub></a></div>
      </nav>
    </footer>

  );
};

export default Footer;