

const Footer = () => {
  return (

    <footer className="footer  p-10 bg-neutral text-neutral-content">
      <nav >
        {/* <header className="footer-title">Services</header> */}
        <img src="https://i.ibb.co/QpBb1JV/gazela.png" className="w-32 ml-8 rounded-md h-32" alt="" />
        <p className="text-2xl font-bold " >Gazela Fine Dine</p>
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
      </nav>
    </footer>

  );
};

export default Footer;