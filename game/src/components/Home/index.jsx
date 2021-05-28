import React, { useCallback } from "react";
import { useState, useEffect, useMemo } from "react";
import SearchBar from "../SearchBar";
import GameList from "../GameList";
import FilterPlatforms from "../FilterPlatforms";

const Home = () => {
  const [gameFilter, setGameFilter] = useState("");
  const [platformId, setPlatformId] = useState(null);

  const handleSearchGame = useCallback((e) => {
    setGameFilter(e);
  });

  const handlePlatformSelect = useCallback((platformId) => {
    setPlatformId(platformId);
  });

  return (
    <div className="Home">
      <SearchBar completion={handleSearchGame} />
      <FilterPlatforms onSelect={handlePlatformSelect} />
      <GameList platformId={platformId} filter={gameFilter} />
    </div>
  );
};

export default Home;
