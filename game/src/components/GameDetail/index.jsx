import React from 'react';
import {useLocation} from "react-router-dom"
import { Jumbotron } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import './index.scss';

const GameDetail = () => {

  const location = useLocation();
  const game = location.state.game;


  return (
    <div className="GameDetail">
      <Jumbotron>
        <div className="Jumbotron">
          <div className="Title">
            <h1>{game.name}</h1>
          </div>
          <img className="img-detail-game" src={game.background_image} alt="img" />
        </div>
      </Jumbotron>
      <div className="body">
        <div className="rating">
          <h3>Notes du jeu : </h3>
          <StarRatingComponent 
            name="rate2" 
            editing={false}
            starCount={5}
            value={game.rating}
          />
          <p>{game.rating}</p>
          <br></br>
          <button type="button" >
            Proposer mon test
          </button>
        </div>
        <div className="released">
          <h3>Date de sortie : </h3>
          <p>{game.released}</p>
        </div>
        <div className="platforms">
          <h3>Plateformes : </h3>
          <p>{game.platforms.map(p => `${p.platform.name} | `)}</p>
        </div>
        <div className="stores">
          <h3>Genre : </h3>
          <p>{game.genres.map(m => `${m.name} | `)}</p>
        </div>
      </div>
      <div className="screenshot">
        <p>{game.short_screenshots.map(p =><img  key={p.name} src={p.image} alt='screenshot'></img>)}</p>
      </div>
    </div>
  );
};

export default GameDetail;
