import React, { useState } from 'react';

function ColorSwitcher() {
  const [bgColor, setBgColor] = useState('')


  return (
    <div>
      <select value={bgColor} onChange={(e) => setBgColor(e.target.value)}>
        <option value=''></option>
        <option value="red">Red</option>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
      </select>
      <div style={{backgroundColor: bgColor}}>
        {/* Change the background color of this div */}
      </div>
    </div>
  );
}

export default ColorSwitcher;
