import { useState, useEffect } from 'react';
import './App.css'
import buttonsData from './buttonsData';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [modifiedStyles, setModifiedStyles] = useState({});
  const [showTutorial, setShowTutorial] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTutorial(false), 5000);  
    return () => clearTimeout(timer);
  }, []);

  const handleStyleChange = (property, value) => {
    if (property === 'borderColor' || property === 'borderWidth') {
      const currentBorder = modifiedStyles.border || "2px solid black";
      const borderComponents = currentBorder.split(' ');

      if (property === 'borderColor') {
        borderComponents[2] = value;
      } else if (property === 'borderWidth') {
        borderComponents[0] = value + 'px';
      }

      value = borderComponents.join(' ');
      property = 'border';
    }

    setModifiedStyles(prev => ({
      ...prev,
      [property]: value
    }));
  };

  if (showTutorial) {
    return (
      <Loader></Loader>
    );
  }

  return (<>
  <Header></Header>
    
    <div className="App">
    
      

      <div className="button-container">
        {buttonsData.map((btn, index) => (
          <button
            key={index}
            style={index === selectedButtonIndex ? { ...btn, ...modifiedStyles } : btn}
            onClick={() => {
              setSelectedButtonIndex(index);
              setModifiedStyles(btn);
            }}
          >
            Button {index + 1}
          </button>
        ))}
      </div>

      {selectedButtonIndex !== null && (
        <div className="properties-display">
          <h2>Properties:</h2>
          <button style={{ ...buttonsData[selectedButtonIndex], ...modifiedStyles }}>
            Button {selectedButtonIndex + 1}
          </button>
          <pre>{JSON.stringify({ ...buttonsData[selectedButtonIndex], ...modifiedStyles }, null, 2)}</pre>
          <button onClick={() => navigator.clipboard.writeText(JSON.stringify({ ...buttonsData[selectedButtonIndex], ...modifiedStyles }))}>
            Copy
          </button>
          <div className="modification-section">
            <h3>Modify Styles:</h3>
            <label>
              Background:
              <input
                type="color"
                value={modifiedStyles.background || ''}
                onChange={e => handleStyleChange('background', e.target.value)}
              />
            </label>
            <label>
              Text Color:
              <input
                type="color"
                value={modifiedStyles.color || ''}
                onChange={e => handleStyleChange('color', e.target.value)}
              />
            </label>
            <label>
              Border Color:
              <input
                type="color"
                value={modifiedStyles.border ? modifiedStyles.border.split(' ')[2] : ''}
                onChange={e => handleStyleChange('borderColor', e.target.value)}
              />
            </label>
            <label>
              Border Width:
              <input
                type="range"
                min="1"
                max="10"
                value={modifiedStyles.border ? parseInt(modifiedStyles.border.split(' ')[0]) : 2}
                onChange={e => handleStyleChange('borderWidth', e.target.value)}
              /> {modifiedStyles.border ? parseInt(modifiedStyles.border.split(' ')[0]) : 2}px
            </label>
            <label>
              Button Width:
              <input
                type="text"
                placeholder="auto"
                value={modifiedStyles.width || ''}
                onChange={e => handleStyleChange('width', e.target.value)}
              />
            </label>
            <label>
              Button Height:
              <input
                type="text"
                placeholder="auto"
                value={modifiedStyles.height || ''}
                onChange={e => handleStyleChange('height', e.target.value)}
              />
            </label>
            <label>
              Border Radius:
              <input
                type="text"
                placeholder="0px"
                value={modifiedStyles.borderRadius || ''}
                onChange={e => handleStyleChange('borderRadius', e.target.value)}
              />
            </label>
            <label>
              Box Shadow:
              <input
                type="text"
                placeholder="none"
                value={modifiedStyles.boxShadow || ''}
                onChange={e => handleStyleChange('boxShadow', e.target.value)}
              />
            </label>
          </div>
        </div>
      )}
      <Footer></Footer>
      
    </div>
   
  </>
    

  );
}

export default App;
