import { Button } from '@material-ui/core';
import { useState } from 'react';
import VideoCall from './components/VideoCall';

function App() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="App" style={{height: "100%"}}>
      {inCall ?
        (<VideoCall setInCall={setInCall} />)
        :
        (<Button
          variant="contained"
          color="primary"
          onClick={() => setInCall(true)}
        >
          Join Call
        </Button>)
      }
    </div>
  );
}

export default App;
