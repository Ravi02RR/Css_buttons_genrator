import "./Custombutton.css";
import { useState } from "react";

function Custombutton() {
    const [buttonStyle, setButtonStyle] = useState({
        background: '#3498db',
        color: '#FFFFFF',
        border: '2px solid #3498db',
        borderRadius: '4px',
        boxShadow: '0px 0px 0px rgba(0,0,0,0)',
        fontSize: '16px',
        fontWeight: 'normal',
        transition: 'none',
        fontFamily: 'Arial, sans-serif',
        transform: 'scale(1)'
    });
    const [buttonText, setButtonText] = useState("Preview");

    const handleStyleChange = (property, value) => {
        setButtonStyle(prev => ({
            ...prev,
            [property]: value
        }));
    };

    const generateCssCode = () => {
        const { background, color, border, borderRadius, boxShadow, fontSize, fontWeight, fontFamily, transform } = buttonStyle;
        let cssCode = `
background: ${background};
color: ${color};
border: ${border};
border-radius: ${borderRadius};
box-shadow: ${boxShadow};
font-size: ${fontSize};
font-weight: ${fontWeight};
font-family: ${fontFamily};
        `.trim();
        
      
        if (buttonStyle.transition !== 'none') {
            cssCode += `
transform: ${transform};
            `.trim();
        }

        return cssCode;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generateCssCode()).then(() => {
            alert("CSS copied to clipboard!");
        });
    };

    return (
        <div className="custom-button-page">
            <h2>Customize Your Button</h2>

            <div className="live-preview">
                <button style={buttonStyle} onMouseEnter={() => {
                    if (buttonStyle.transition === 'grow') {
                        handleStyleChange('transform', 'scale(1.1)');
                    } else if (buttonStyle.transition === 'shrink') {
                        handleStyleChange('transform', 'scale(0.9)');
                    }
                }} onMouseLeave={() => handleStyleChange('transform', 'scale(1)')}>{buttonText}</button>
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

                <label>
                    Box Shadow:
                    <input type="range" min="0" max="30" onChange={e => handleStyleChange('boxShadow', `0px ${e.target.value}px ${e.target.value}px rgba(0,0,0,0.2)`)} />
                </label>

                <label>
                    Font Size:
                    <input type="range" min="12" max="30" value={parseInt(buttonStyle.fontSize)} onChange={e => handleStyleChange('fontSize', `${e.target.value}px`)} />
                </label>

                <label>
                    Font Weight:
                    <select value={buttonStyle.fontWeight} onChange={e => handleStyleChange('fontWeight', e.target.value)}>
                        <option value="normal">Normal</option>
                        <option value="bold">Bold</option>
                        <option value="bolder">Bolder</option>
                        <option value="lighter">Lighter</option>
                    </select>
                </label>

                <label>
                    Button Text:
                    <input type="text" value={buttonText} onChange={e => setButtonText(e.target.value)} />
                </label>

                <label>
                    Animation:
                    <select onChange={e => handleStyleChange('transition', e.target.value)}>
                        <option value="none">None</option>
                        <option value="grow">Grow</option>
                        <option value="shrink">Shrink</option>
                    </select>
                </label>

                <label>
                    Font Family:
                    <select value={buttonStyle.fontFamily} onChange={e => handleStyleChange('fontFamily', e.target.value)}>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="'Times New Roman', serif">Times New Roman</option>
                        <option value="'Courier New', monospace">Courier New</option>
                        <option value="'Lucida Sans Unicode', sans-serif">Lucida Sans</option>
                    </select>
                </label>
            </div>
            <div className="css-display">
                <h3>Your CSS Code:</h3>
                <textarea readOnly value={generateCssCode()} rows="10" cols="30" />
                <button onClick={handleCopy}>Copy CSS</button>
            </div>
        </div>
    );
}

export default Custombutton;
