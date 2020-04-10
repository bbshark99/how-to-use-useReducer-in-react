import React from 'react';
import logo from './logo.svg';
import './App.css';

// import Counter from './components/Counter';
// import InitialCounter from './components/InitialCounter';
import SelfCounter from './components/SelfCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

{/*   
      <Counter />
      <hr />
      <InitialCounter initialCount={0} />
      <hr /> 
*/}

      <SelfCounter />
    </div>
  );
}

export default App;
