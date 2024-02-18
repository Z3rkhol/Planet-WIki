import React from 'react';
import Swal from 'sweetalert2';
import Details from './PlanetDetails';

function Planet({ name, image, info }) {
    const showPlanetInfo = () => {
        Swal.fire({
            title: name,
            html: `
                <div style="display: flex; align-items: center;">
                    <img src="${image}" width="500" height="500" alt="Image of ${name}" style="margin-right: 20px;">
                    <div>${info}</div>
                </div>`,
            imageAlt: `Image of ${name}`,
            showCloseButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Details...',
            width: 1000,
        }).then((result) => {
            if (result.isConfirmed) {
                Details(name);
            }
        });
    };

    return (
        <div onClick={showPlanetInfo} className="planet-item">
            {name}
        </div>
    );
}

export default Planet;