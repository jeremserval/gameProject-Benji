import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

const FilterPlatforms = ({platforms, setGames}) => {

  const fetchPlatforms = (id) => {
    fetch(`https://api.rawg.io/api/games?key=21dd3ea253de44a6bc6c827eedc10926&platforms=${id}`)
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  }

  return (
    <div className="FilterPlatforms">
      <option>Plateformes : </option>
      <select id="Platforms" onChange={(e) => fetchPlatforms(e.target.value)}>
        {platforms.map(p =>
          <option value={p.id} key={p.id} >{p.name}</option>
        )}
      </select>
    </div>
  );
};

export default FilterPlatforms;
