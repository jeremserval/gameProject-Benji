import { useEffect, useState } from "react";

import { fetchPlatforms } from "../api/platforms";

export const usePlatforms = () => {
  const [platforms, setPlaforms] = useState([]);

  useEffect(() => {
    fetchPlatforms().then(({ results }) => setPlaforms(results));
  }, []);

  return platforms;
};
