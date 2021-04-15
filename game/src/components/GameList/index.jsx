import React from 'react';
import './index.scss';


const GameList = ({games}) => {
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
          <button>en savoir plus</button>
        </div>
      </div>
    </div>        
    )}
  </div>
  );
};

export default GameList;
