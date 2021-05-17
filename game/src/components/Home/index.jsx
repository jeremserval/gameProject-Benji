import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import SearchBar from '../SearchBar';
import GameList from '../GameList';
import FilterPlatforms from '../FilterPlatforms';

const Home = () => {

  useEffect(() => {
    fetchGame()
  }, []);

  const [games, setGames] = useState([]);
  const [filterGame, setFilterGame] = useState("");
  const [allPlatforms, setPlatforms] = useState([]);
  const [filteredPlatforms, setFilteredPlatforms] = useState([]);



  const fetchGame = () => {
    fetch('https://api.rawg.io/api/games?key=21dd3ea253de44a6bc6c827eedc10926&page_size=15')
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  }

  const handleSearchGame = (e) => {
    setFilterGame(e);
  }

  const filterSearch = useMemo(() => {
    let filtered = games.filter(game => game.name.toLowerCase().indexOf(filterGame.toLowerCase()) !== -1)
    return filtered
  })

  const fetchPlatforms = () => {
    fetch('https://api.rawg.io/api/platforms?key=21dd3ea253de44a6bc6c827eedc10926')
    .then(resp => resp.json())
    .then(({results}) => setPlatforms(results))
  }


  useEffect(() => {
    fetchPlatforms()
  }, []);

  return (
    <div className="Home">
      <SearchBar completion={handleSearchGame}/>
      <FilterPlatforms platforms={allPlatforms}  />

      
      <GameList games={filterSearch} />
    </div>
  );
};

export default Home;
