import React from 'react';

const FilterPlatforms = ({platforms}) => {

  return (
    <div className="FilterPlatforms">
      <option>Plateformes : </option>
      <select id="Platforms">
        {platforms.map(p =>
          <option value={p.id} key={p.id}>{p.name}</option>
        )}
      </select>
    </div>
  );
};

export default FilterPlatforms;
