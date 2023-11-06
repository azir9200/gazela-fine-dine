import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Register = () => {
  const { createUser } = useContext(AuthContext);


  const handleRegister = event => {

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password)

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .then(error => {
        console.error(error);
      })

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
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Reegister</button>
            </div>
          </form>
          <p className='my-4 text-center'>Already have an Account <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Register;