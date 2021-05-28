import React from "react";
import { useGames } from "../../hooks/useGames";
import { usePlatforms } from "../../hooks/usePlatforms";

const FilterPlatforms = ({ onSelect }) => {
  const platforms = usePlatforms();

  return (
    <div className="FilterPlatforms">
      <option>Plateformes : </option>
      <select id="Platforms" onChange={(e) => onSelect(e.target.value)}>
        {platforms.map((p) => (
          <option value={p.id} key={p.id}>
            {p.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterPlatforms;
