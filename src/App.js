import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>mai-t1d Frontend</h1>
        <p>
          Welcome to the mai-t1d application!
        </p>
        <p>
          Environment: {process.env.REACT_APP_ENVIRONMENT || 'development'}
        </p>
        <p>
          API Base URL: {process.env.REACT_APP_API_BASE_URL || 'Not configured'}
        </p>
      </header>
    </div>
  );
}

export default App;
