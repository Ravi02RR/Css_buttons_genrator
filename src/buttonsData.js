const colorThemes = [
  
  { background: '#3498db', color: '#FFFFFF', border: '2px solid #3498db' },
  { background: 'transparent', color: '#3498db', border: '2px solid #3498db' },
  { background: 'linear-gradient(to right, #6a11cb, #2575fc)', color: '#FFFFFF', border: 'none' },
  { background: '#e74c3c', color: '#FFFFFF', border: 'none', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)' },
  { background: '#9b59b6', color: '#FFFFFF', border: 'none', borderRadius: '10px' },
  { background: 'transparent', color: '#2ecc71', border: '3px dashed #2ecc71' },
  { background: '#34495e', color: '#ecf0f1', border: '2px solid #7f8c8d', textTransform: 'uppercase' },
  { background: 'linear-gradient(to bottom, #f39c12, #e67e22)', color: '#FFFFFF', border: 'none' },
  { background: '#7f8c8d', color: '#ecf0f1', border: 'none', fontSize: '18px', fontWeight: 'bold' },
  { background: '#1abc9c', color: '#2c3e50', border: 'none', letterSpacing: '2px' },
   { background: 'transparent', color: '#95a5a6', border: '2px solid #95a5a6', fontSize: '18px', fontWeight: 'bold', letterSpacing: '2px' },
  { background: 'linear-gradient(to bottom right, #f1c40f, #f39c12)', color: '#2c3e50', border: 'none', borderRadius: '20px' },
  { background: '#ecf0f1', color: '#34495e', border: '3px solid #bdc3c7', textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)' },
  { background: 'linear-gradient(to bottom right, #2ecc71, #16a085)', color: '#ecf0f1', border: 'none', borderRadius: '15px' },
  { background: 'transparent', color: '#2c3e50', border: '2px dashed #3498db', boxShadow: '0px 8px 15px rgba(52, 152, 219, 0.3)' },
  { background: '#f39c12', color: '#2c3e50', border: 'none', borderRadius: '25px', textTransform: 'uppercase', fontWeight: 'bold' },
  { background: 'linear-gradient(to right, #e74c3c, #c0392b)', color: '#ecf0f1', border: 'none', borderRadius: '5px', fontSize: '16px' }
];

const generateButtonData = () => {
  const baseTheme = colorThemes[Math.floor(Math.random() * colorThemes.length)];
  const shouldTransform = Math.random() > 0.7;
  const shouldHaveRadius = Math.random() > 0.7;
  const shouldChangeFont = Math.random() > 0.7;
  
  if (shouldTransform) {
      baseTheme.textTransform = 'uppercase';
  }

  if (shouldHaveRadius) {
      baseTheme.borderRadius = `${Math.floor(Math.random() * 15) + 5}px`;
  }

  if (shouldChangeFont) {
      baseTheme.fontSize = `${Math.floor(Math.random() * 6) + 14}px`;
  }

  return baseTheme;
};

const buttonsData = Array.from({ length: 100 }).map(generateButtonData);

export default buttonsData;
