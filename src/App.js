import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './componets/homes/Home';
import About from './componets/abouts/About';
import Blog from './componets/blogs/Blog';
import Contact from './componets/contacts/Contact';
import Login from './componets/logins/Login';
import Register from './componets/registers/Register';
import Profile from './componets/profiles/Profile';
import NotFoundPage from './componets/notfoundpages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-body"> 
          <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} /> 
            <Route path="/profile" component={Profile} /> 
            <Route component={NotFoundPage} /> 
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
