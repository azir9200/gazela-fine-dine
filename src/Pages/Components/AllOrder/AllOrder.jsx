import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const AllOrder = () => {
  const { user } = useContext(AuthContext);
  const [allOrder, setAllOrder] = useState([]);

  // const url = `https://y-4bwgrg4eq-azir-uddins-projects.vercel.app/mealOrder?email=${user.email}`;
  useEffect(() => {
    fetch(`https://y-4bwgrg4eq-azir-uddins-projects.vercel.app/mealOrder?email=${user.email}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div>

    </div>
  );
};

export default AllOrder;