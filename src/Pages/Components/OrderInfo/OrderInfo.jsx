import { useLoaderData } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

import SweetAlert2 from "react-sweetalert2";


const OrderInfo = () => {

  const { food_name, price, } = useLoaderData();

  const { user } = useContext(AuthContext);

  const handleConfirmOrder = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    // const foodName = form.food_name.value;
    const date = form.date.value;
    const photoUrl = user?.photo;
    console.log(name, photoUrl, email, date);
    const mealOrder = {
      food_name,
      photoUrl,
      price,
      email,
      date
    }
    console.log(mealOrder);
    console.log(mealOrder);
    fetch('http://localhost:5000/mealOrder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(mealOrder)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          SweetAlert2.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        }
      })
  }
  return (

    <div >

      <h1 className="text-5xl text-center mt-8 font-semibold">Please Make Your Order Here</h1>
      <form onSubmit={handleConfirmOrder} >
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 m-12 " >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input type="text" name="food_name," placeholder="food name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" placeholder="price" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" name="yourName" placeholder="your name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input type="text" name="address" placeholder="address" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" placeholder="date" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input type="number" name="phone" placeholder="phone" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Photo</span>
            </label>
            <input type="photo" name="photoUrl" placeholder="photo" className="input input-bordered" />
          </div>

        </div>

        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Order Confirm" />
        </div>

      </form>
    </div >
  );
};

export default OrderInfo;