import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Pages
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

// Other
// import UnderConstruction from './UnderConstruction/UnderConstruction';
import FoobarReferral from './FoobarReferral/FoobarReferral';


class App extends React.Component {

    render() {
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

                    {/* Other stuff */}
                    <Route exact path="/foobar_referral" component={FoobarReferral}/>
                </Switch>
            </Router>
        );
    }
  
}

export default App;
