import React from 'react';
import LoginPage from './pages/LoginPages/LoginPage';
import HomePage from './pages/HomePages/HomePage';
import ErrorPage from './pages/ErrorPages/ErrorPage';

const routes = [
	{
		path: '/login',
		exact: true,
		main: () => <LoginPage />
	},
	{
		path: '/',
		exact: false,
		main: () => <HomePage />
	},
	{
		path: '',
		exact: false,
		main: () => <ErrorPage />
	}
];

export default routes;