import React from 'react';
import './SolarSystem.css';

function SolarSystem({ planets }) {
  return (
    <div className="solar-system">
      {planets.map((planet) => (
        planet.name === 'Sun' ? (
          <img key={planet.name} src={planet.image} alt={planet.name} className="sun"/>
        ) : (
          <div key={planet.name} className={`${planet.name.toLowerCase()}-orbit planet-orbit`}>
            <div className={`${planet.name.toLowerCase()} planet`}></div>
          </div>
        )
      ))}
    </div>
  );
}

export default SolarSystem;