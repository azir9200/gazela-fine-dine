import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";



const Register = () => {
  const { createUser } = useContext(AuthContext);
  // const [passwordError, setPasswordError] = useState("");
  // console.log(passwordError);


  const handleRegister = e => {

    e.preventDefault();

    const form = e.target;
    const userEmail = form.email.value;
    const userName = form.name.value;
    const userPassword = form.password.value;
    const userPhotoUrl = form.photoUrl.value;
    const newUser = { userEmail, userPassword, userName, userPhotoUrl, userCart: [] };
    console.log(userEmail, userName, userPassword);
    // const userDetails = {
    //   userName: name,
    //   userEmail: email,
    //   userPhoto: photoUrl,   // }


    createUser(userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        fetch('https://y-4bwgrg4eq-azir-uddins-projects.vercel.app/foodUsers', {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // navigate(location?.state ? location.state : "/");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-sky-200">


        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold">Please Register Here</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="PhotoUrl"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Reegister</button>
            </div>
          </form>



          <div className="flex justify-center items-center gap-6" >
            <p className='mb-4 text-center'>Already have an Account click <Link className='text-orange-600 text-xl ml-2 font-bold' to="/login">Login</Link> <span className="ml-4"> OR</span> </p>
            <a className="link link-hover text-2xl"><FaFacebook></FaFacebook>  </a>
            <a className="link link-hover text-2xl"><FaGoogle></FaGoogle>  </a>
            <a className="link link-hover text-2xl"><FaGithub></FaGithub></a></div>


        </div>
      </div>
    </div>
  );
};

export default Register;