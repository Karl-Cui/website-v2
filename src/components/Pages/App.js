import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Pages
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import UnderConstruction from './UnderConstruction/UnderConstruction';

function App() {
  return (
    <Router>
        <Switch>
            {/* Site is under construction! */}
            {/* <Route exact path="/blog" component={UnderConstruction}/> */}

            {/* Site is not under construction */}
            <Route exact path="/" component={Home}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
    </Router>
  );
}

export default App;
