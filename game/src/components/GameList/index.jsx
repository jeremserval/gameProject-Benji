import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";

import { useGames } from "../../hooks/useGames";

import "./index.scss";

const GameList = ({ platformId, filter }) => {
  const history = useHistory();
  const games = useGames(platformId);

  function handleClick(game) {
    history.push({
      pathname: "/GameDetail",
      search: `?id=${game.id}`,
      state: { game: game },
    });
  }

  const filteredGames = useMemo(() =>
    games.filter(
      (game) => game.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    )
  );

  return (
    <div className="GameList">
      {filteredGames.map((game) => (
        <div className="container" key={game.id}>
          <div className="game-card">
            <img className="img-game" src={game.background_image} alt="img" />
            <div className="card-body">
              <h3 className="title-game">{game.name}</h3>
              <p>Date de sortie: {game.released}</p>
              <h3>Plateformes : </h3>
              <p>{game.platforms.map((p) => `${p.platform.name} | `)}</p>
              <button
                type="button"
                onClick={() => {
                  handleClick(game);
                }}>
                en savoir plus
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;
