import React from 'react';

export const ControlPanel = ({ play, seed, stop, clearBoard, speed, handleSpeed, changeSpeed }) => (
  <div>
    <button
      type="button"
      onClick={play}
    >
      PLAY
    </button>
    <button
      type="button"
      onClick={seed}
    >
      SEED
    </button>
    <button
      type="button"
      onClick={stop}
    >
      STOP
    </button>
    <button
      type="button"
      onClick={clearBoard}
    >
      CLEAR
    </button>
    <input
      type="number"
      value={speed}
      onChange={handleSpeed}
      onKeyDown={changeSpeed}
    />
  </div>
);
