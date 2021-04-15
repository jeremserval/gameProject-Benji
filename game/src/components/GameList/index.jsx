import React from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import GameDetail from '../GameDetail';


const GameList = ({games}) => {

  let history = useHistory();

  function handleClick(game) {
    history.push({
      pathname: '/GameDetail',
      search : `?id=${game.id}`,
      state: { game: 'game'}
    });
  }


  return (
    <div className="GameList">
    {games.map(game =>
    <div className="container" key={game.id}>
      <div className="game-card">
        <img className="img-game" src={game.background_image} alt="img" />
        <div className="card-body">
          <h3  className="title-game">{game.name}</h3>
          <p>Date de sortie: {game.released}</p>
          <h3>Plateformes : </h3>
          <p>{game.platforms.map(p => `${p.platform.name} | `)}</p>
          <button type="button" onClick={handleClick(game)}>
            en savoir plus
          </button>
        </div>
      </div>
    </div>        
    )}
  </div>
  );
};

export default GameList;
