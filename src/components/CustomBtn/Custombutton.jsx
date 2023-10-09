import { useState } from "react";
import './Custombutton.css'



function Custombutton() {
    const [buttonStyle, setButtonStyle] = useState({
      background: '#3498db',
      color: '#FFFFFF',
      border: '2px solid #3498db',
      borderRadius: '4px'
    });
  
    const handleStyleChange = (property, value) => {
      setButtonStyle(prev => ({
        ...prev,
        [property]: value
      }));
    };
  
    return (
      <div className="custom-button-page">
        <h2>Customize Your Button</h2>
  
        <div className="live-preview">
          <button style={buttonStyle}>Preview</button>
        </div>
  
        <div className="controls">
          <label>
            Background Color:
            <input type="color" value={buttonStyle.background} onChange={e => handleStyleChange('background', e.target.value)} />
          </label>
  
          <label>
            Text Color:
            <input type="color" value={buttonStyle.color} onChange={e => handleStyleChange('color', e.target.value)} />
          </label>
  
          <label>
            Border:
            <input type="color" value={buttonStyle.border.split(' ')[2]} onChange={e => handleStyleChange('border', `2px solid ${e.target.value}`)} />
          </label>
  
          <label>
            Border Radius:
            <input type="range" min="0" max="50" value={parseInt(buttonStyle.borderRadius)} onChange={e => handleStyleChange('borderRadius', `${e.target.value}px`)} />
          </label>
        </div>
      </div>
    );
  }
  
  export default Custombutton;
  