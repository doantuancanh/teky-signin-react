import React, { Component } from 'react';
import routes from './../../routes';
import { Switch, Route, Redirect } from 'react-router-dom';

class DefaultLayout extends Component {
	render() {
		if (!this.props.authService.token) {
	      return <Redirect to="/login" />
	    }
		return (
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
                  })}
                  <Redirect from="/" to="/dashboard" />
	            </Switch>
          	</div>
		);
	}
}

export default DefaultLayout;