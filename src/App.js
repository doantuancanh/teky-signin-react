import React, { Component } from 'react';
import Login from './pages/LoginPages/LoginPage';
import './App.css';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            {/*<Login />*/}
            { this.showContent(routes) }
          </div>
        </div>
      </Router>
    );
  }
  showContent = (route) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => {
        return (
          <Route 
            key={ index }
            path={ route.path }
            exact={ route.exact }
            component={ route.main }
          />
        )
      });
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
