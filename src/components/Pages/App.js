import React from 'react';
import UnderConstruction from './UnderConstruction/UnderConstruction';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* switch with actual page when done */}
      <UnderConstruction/>
    </div>
  );
}

export default App;
