import React, { useState, useEffect } from 'react';

const FilterPlatforms = ({platforms, handleChange}) => {

  
  return (
    <div className="FilterPlatforms">
      <option>--Please choose an option--</option>
      <select id="pet-select"  >
          {platforms.map(p =>
            <option value={p.id} key={p.id}>{p.name}</option>
          )}
      </select>
    </div>
  );
};

export default FilterPlatforms;
