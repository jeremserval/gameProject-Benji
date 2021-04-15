import React from 'react';
import {useLocation} from "react-router-dom"

const GameDetail = props => {

  const location = useLocation();

  

  return (
    <div className="GameDetail">
      <h1>c'est le jeu {location.game.name} </h1> 
    </div>
  );
};

export default GameDetail;
