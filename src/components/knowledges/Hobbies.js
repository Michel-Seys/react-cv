import React from 'react';

const Hobbies = () => {
    return (
            <div className="hobbies">
                <h3>Intérêts</h3>
                <ul>
                    <li className="hobby">
                        <i className="fas fa-running"></i>
                        <span>Marche</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-hiking"></i>
                        <span>Simulation</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-seedling"></i>
                        <span>Randonnées</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-bitcoin"></i>
                        <span>Cinéma</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-rocket"></i>
                        <span>Vélo</span>
                    </li>
                </ul>
            </div>
    );
};

export default Hobbies;
