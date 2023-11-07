

const ErrorPage = () => {
  return (
    <div className=" text-center m-20 border-double border-fuchsia-600 border-8 " >
      <div className=" mt-8" >
        <p className="text-3xl  text-yellow-400" > Opps Looks Like SomeWhere Something Wrong ! </p>

        <p className="text-3xl text-red-400" > Do not worry, it will be alright very soon ! </p>
        <p className="text-3xl text-green-300" > Try Again ! Por Favor. </p>
        <div className="flex mb-8 justify-center ">
          <img src="https://i.ibb.co/GMCfm7M/error.png" alt="Error Image" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;