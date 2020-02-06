import React, { Component } from 'react';
import Login from './pages/LoginPages/LoginPage';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ErrorPage from './pages/ErrorPages/ErrorPage';
import DefaultLayout from './containers/DefaultLayout/DefaultLayout'
import { connect } from 'react-redux';
import { signOut } from './actions/loginAction'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route exact path="/error" name="Error Page" render={props => <ErrorPage {...props}/>} />
            <Route path="/" name="Dashboard" render={props => <DefaultLayout {...props}
              authService={this.props.authService}
              signOut={this.props.signOut}/>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  authService: state.authService
})

const mapDispatchToProps = dispatch => ({
  signOut: () => { dispatch(signOut()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
