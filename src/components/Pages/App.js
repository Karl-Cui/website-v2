import React from 'react';
import Home from './Home/Home';
import UnderConstruction from './UnderConstruction/UnderConstruction';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Site is under construction page */}
      {/* <UnderConstruction/> */}

      <Home/>
    </div>
  );
}

export default App;
