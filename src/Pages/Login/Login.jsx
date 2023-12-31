import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import swal from "sweetalert";

const Login = () => {
  const { signIn, googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIN = async () => {
    googleLogIn();
    navigate(location?.state ? location.state : "/");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          swal("User Login Successful");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login Please</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <div className="flex justify-center items-center gap-6">
            <p className="mb-4 text-center">
              Do not have a account yet ? click{" "}
              <Link
                className="text-orange-600 text-xl ml-2 font-bold"
                to="/register"
              >
                Register
              </Link>{" "}
              <span className="ml-4"> OR</span>{" "}
            </p>

            <button className="btn" onClick={handleGoogleSignIN}>
              {" "}
              <FaGoogle></FaGoogle>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
