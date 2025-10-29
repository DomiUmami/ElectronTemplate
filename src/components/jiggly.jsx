import React, { useState } from 'react';

export default function JigglerApp() {
  const [isOn, setIsOn] = useState(false);
  const [interval, setIntervalValue] = useState(2000); // default 2 seconds

  const toggleJiggler = () => {
    const newState = !isOn;
    setIsOn(newState);
    window.jigglerAPI.toggle({ enabled: newState, interval });
  };

  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    setIntervalValue(value);
    if (isOn) {
      // Update jiggler in real-time if already running
      window.jigglerAPI.toggle({ enabled: true, interval: value });
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem', fontFamily: 'sans-serif' }}>
      <h1>🖱️ Mouse Jiggler</h1>
      <button
        onClick={toggleJiggler}
        style={{
          padding: '10px 25px',
          fontSize: '18px',
          backgroundColor: isOn ? '#d9534f' : '#5cb85c',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        {isOn ? '✓ Stop Jiggler' : '☐ Start Jiggler'}
      </button>

      <div style={{ marginTop: '2rem' }}>
        <label>
          <strong>Jiggle every:</strong> {interval / 1000}s
        </label>
        <br />
        <input
          type="range"
          min="500"
          max="10000"
          step="500"
          value={interval}
          onChange={handleSliderChange}
          style={{ width: '80%', marginTop: '1rem' }}
        />
      </div>
    </div>
  );
}
