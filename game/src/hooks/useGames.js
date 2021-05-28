import { useEffect, useState } from "react";

import { fetchGames } from "../api/games";

export const useGames = (platformId = null) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames(platformId).then(({ results }) => setGames(results));
  }, [platformId]);

  return games;
};
