import { useEffect, useState } from "react";
import MainMenuCard from "../MainMenuCard/MainMenuCard";


const MainMenu = () => {
  const [menues, setMenues] = useState([])

  useEffect(() => {
    fetch('https://y-4bwgrg4eq-azir-uddins-projects.vercel.app/getTopItem')
      .then(res => res.json())
      .then(data => setMenues(data))

  }, [])


  return (
    <div className="mt-6">
      <div className="text-center">
        <h2 className="text-4xl font-semibold my-16 bg-zinc-100">
          Taste Your Best Meal From Our Restaurent.{" "}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-6">
        {menues.map((menu) => (
          <MainMenuCard
            key={menu.id}
            menu={menu}
          ></MainMenuCard>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;