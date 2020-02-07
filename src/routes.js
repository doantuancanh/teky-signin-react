import React from 'react';
import LoginPage from './pages/LoginPages/LoginPage';
import DashboardPage from './pages/DashboardPages/DashboardPage';

const routes = [
	{
		path: '/login',
		exact: true,
		component: () => <LoginPage />
	},
	{
		path: '/dashboard',
		exact: false,
		component: () => <DashboardPage />
	}
];

export default routes;
