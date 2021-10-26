import { useState } from 'react';
import './App.css';

function App() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="App">
      {inCall ? "We are in a Call!" : "Waiting to join a call!"}
    </div>
  );
}

export default App;
