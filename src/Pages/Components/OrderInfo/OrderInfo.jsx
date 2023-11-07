

const OrderInfo = () => {
  return (

    <div >

      <h1 className="text-5xl text-center mt-8 font-semibold">Please Make Your Order Here</h1>
      <form>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 m-12 " >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input type="text" name="foodName" placeholder="food name" className="input input-bordered" />
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

        </div>

        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Order Confirm" />
        </div>

      </form>
    </div >
  );
};

export default OrderInfo;