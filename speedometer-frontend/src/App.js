import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactSpeedometer from 'react-d3-speedometer';
import './style.css';

function App() {
    const [speed, setSpeed] = useState(0);

    useEffect(() => {
        const fetchSpeed = () => {
            axios.get('http://localhost:5000/speed')
                .then(response => {
                    setSpeed(response.data.speed);
                })
                .catch(error => {
                    console.error('There was an error fetching the speed!', error);
                });
        };

        const interval = setInterval(fetchSpeed, 1000); // Fetch speed every second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const handleUpdateSpeed = () => {
        axios.get('http://localhost:5000/speed')
            .then(response => {
                setSpeed(response.data.speed);
            })
            .catch(error => {
                console.error('There was an error fetching the speed!', error);
            });
    };

    return (
        <div className="App">
            <h1>Speedometer</h1>
            <div className="speedometer-container">
                <ReactSpeedometer
                    value={speed}
                    minValue={0}
                    maxValue={100}
                    segments={5}
                    needleColor="red"
                    startColor="green"
                    endColor="red"
                    textColor="black"
                    forceRender={true}
                />
            </div>
            <div className="speed-value">Current Speed: {speed} km/h</div>
            <button onClick={handleUpdateSpeed} className="update-button">Update Speed</button>
        </div>
    );
}

export default App;
