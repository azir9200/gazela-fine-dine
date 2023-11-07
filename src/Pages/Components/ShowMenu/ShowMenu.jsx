import { useLoaderData } from "react-router-dom";


const ShowMenu = () => {
  const showMenues = useLoaderData();

  // const { foodName } = showMenues;
  console.log(showMenues);
  return (
    <div>
      {/* <h2>show my menu  {foodName} </h2> */}
      <h2>show my menu   </h2>
    </div>
  );
};

export default ShowMenu;