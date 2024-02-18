import React, { useState, useEffect } from 'react';
import PlanetList from './components/PlanetList';
import PlanetDetails from './components/PlanetDetails';
import SolarSystem from './components/SolarSystem';
import './App.css';

function App() {
    const [planets, setPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    useEffect(() => {
        // Your fetched planets data
        const fetchedPlanets = [
          { name: 'Sun', image: '/images/sun.png', imageB: '/images/sunB.png', info: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, radiating energy mainly as light and heat. It is by far the most important source of energy for life on Earth.' },
          { name: 'Mercury', imageB: '/images/mercury.png', info: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes only 88 days.' },
          { name: 'Venus', imageB: '/images/venus.png', info: 'Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the brightest objects in the night sky.' },
          { name: 'Earth', imageB: '/images/earth.png', info: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth’s surface is water-covered.' },
          { name: 'Mars', imageB: '/images/mars.png', info: 'Mars is the fourth planet from the Sun and the second smallest planet in the Solar System. It is often referred to as the "Red Planet".' },
          { name: 'Jupiter', imageB: '/images/jupiter.png', info: 'Jupiter is the largest planet in the Solar System and fifth from the Sun. It is a gas giant with a mass more than two and a half times that of all the other planets combined.' },
          { name: 'Saturn', imageB: '/images/saturn.png', info: 'Saturn is the sixth planet from the Sun and the second largest in the Solar System. It is well known for its prominent ring system.' },
          { name: 'Uranus', imageB: '/images/uranus.png', info: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.' },
          { name: 'Neptune', imageB: '/images/neptune.png', info: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. It is four times wider than Earth.' }
        ];
        setPlanets(fetchedPlanets);
    }, []);

    const handlePlanetSelect = (planetName) => {
        const planet = planets.find(p => p.name === planetName);
        setSelectedPlanet(planet);
    };

    return (
      <div className="app">
          <PlanetList planets={planets} onPlanetSelect={handlePlanetSelect} />
          {selectedPlanet && <PlanetDetails planet={selectedPlanet} />}
          <SolarSystem planets={planets} />
      </div>
  );
}

export default App;