import React from 'react';
import Planet from './Planet';

function PlanetList({ planets }) {
    return (
      <div className="planet-list">
          {planets.map((planet, index) => (
              <Planet
                  key={index}
                  name={planet.name}
                  image={planet.imageB}
                  info={planet.info}
              />
          ))}
      </div>
  );
}

export default PlanetList;