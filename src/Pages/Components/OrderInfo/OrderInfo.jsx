import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../Provider/AuthProvider";

const OrderInfo = () => {
  const { food_name, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const date = form.date.value;
    const photoUrl = user?.photo;

    const mealOrder = {
      food_name,
      photoUrl,
      price,
      email,
      date,
    };

    fetch("https://y-4bwgrg4eq-azir-uddins-projects.vercel.app/mealOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mealOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-5xl text-center mt-8 font-semibold">
        Please Make Your Order Here
      </h1>
      <form onSubmit={handleConfirmOrder}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 m-12">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input
              type="text"
              name="food_name"
              value={food_name}
              readOnly
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              value={price}
              readOnly
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="yourName"
              value={user.displayName}
              readOnly
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              name="date"
              value={formattedDate}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Photo</span>
            </label>
            <img src={user.photURL} alt="" />
          </div>
        </div>
        <div className="form-control my-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default OrderInfo;
