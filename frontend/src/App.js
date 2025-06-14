import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to My React App</h1>
      <p>This is a simple React project using functional components.</p>
      <button onClick={() => alert('You clicked me!')}>Click Me</button>
    </div>
  );
}

export default App;
