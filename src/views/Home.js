import React from "react";
import ListContainer from "../components/ListContainer/ListContainer";
import { useItemsContext } from "../CartContext";
import { StyledHeadliner } from "../styled-components/Headliner.styled";

const Home = () => {
  const { changeMode, darkMode } = useItemsContext();

  return (
    <div className={`home pt-3 pb-5 ${darkMode && "bodyColor"}`}>
      <StyledHeadliner color="black">Productos</StyledHeadliner>
      <ListContainer />
    </div>
  );
};

export default Home;
