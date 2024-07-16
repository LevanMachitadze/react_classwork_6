import React, { useState } from 'react';

function App() {
  let [size, setSize] = useState(50);

  const fontSize = (event) => {
    setSize([(size = event.target.value)]);
    console.log(size);
  };

  return (
    <>
      <div>
        <h1>header</h1>
        <form action='/action_page.php'>
          <input
            onChange={fontSize}
            type='range'
            name='vol'
            min={0}
            max={500}
          />
        </form>
        <p style={{ fontSize: `${size}px` }}>adjust my size</p>
      </div>
    </>
  );
}

export default App;
