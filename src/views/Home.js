import React from "react";
import ListContainer from "../components/ListContainer/ListContainer";
import { useItemsContext } from "../CartContext";

const Home = () => {
  const { changeMode, darkMode } = useItemsContext();

  return (
    <div className={` ${darkMode && "bodyColor"}`}>
      <h2 className="text-center p-4">Productos</h2>
      <ListContainer />
    </div>
  );
};

export default Home;
