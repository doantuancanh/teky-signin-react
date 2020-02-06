import React, { Component } from 'react';
import routes from './../../routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import DefaultTopBar from './DefaultTopBar';
import DefaultSideBar from './DefaultSideBar'

class DefaultLayout extends Component {
    signOut(e) {
        e.preventDefault()
        this.props.signOut()
        // this.props.history.push('/login')
    }
    render() {
        if (!this.props.authService.token) {
          return <Redirect to="/login" />
        }
        return (
            <div className="App">
                <DefaultSideBar />
                <DefaultTopBar onLogout={e=>this.signOut(e)}/>
                <div className="container">
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (
                              <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component {...props} />
                                )} />
                            ) : (null);
                            })
                        }
                      <Redirect from="/" to="/dashboard" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default DefaultLayout;