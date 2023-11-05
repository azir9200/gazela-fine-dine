import { useEffect, useState } from "react";
import MainMenuCard from "../MainMenuCard/MainMenuCard";


const MainMenu = () => {
  const [menues, setMenues] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/mainmenu')
      .then(res => res.json())
      .then(data => setMenues(data))

  }, [])


  return (

    <div className="mt-6">
      <div className="text-center">
        <h2 className="text-2xl" >Taste Your Best Food From Our Restaurent.  </h2>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-6" >
        {
          menues.map(menu => <MainMenuCard
            key={menu.id}
            menu={menu}
          ></MainMenuCard>)
        }
      </div>
    </div>
  );
};

export default MainMenu;