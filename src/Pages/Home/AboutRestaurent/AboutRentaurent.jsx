import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const AboutRentaurent = () => {
  return (
    <div>

      <div className="hero min-h-5xl bg-emerald-100 mb-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/mBr5b2t/aboutre.png" className="rounded-lg shadow-xl" />
          <div className=" font-medium " >
            <h1 className="text-3xl italic pb-6 font-bold">TELL US YOUR THOUGHTS</h1>
            <p className="text-2xl" >Share your restaurant feedback with The Good Food Guide editors. Combined with expert inspections, your feedback helps us compile The Good Food Guide reviews.</p>
            <div className=" text-center justify-center" >
              <p className="pt-6 text-2xl" >Find Us On.</p>
              <div className="flex justify-center gap-6" >
                <a className="link link-hover text-4xl text-sky-500"><FaFacebook></FaFacebook>  </a>
                <a className="link link-hover text-4xl text-pink-500"><FaGoogle></FaGoogle>  </a>
                <a className="link link-hover text-4xl"><FaGithub></FaGithub></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRentaurent;