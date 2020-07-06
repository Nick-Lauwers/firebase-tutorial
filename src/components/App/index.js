import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

const App = () => (
	<Router>
		<div>
			<Navigation />

			<hr />

			<Route exact path={ROUTES.LANDING} 
						 component={props => <LandingPage {...props} />
			<Route path={ROUTES.SIGN_UP} 
						 component={props => <SignUpPage {...props} />
			<Route path={ROUTES.SIGN_IN} 
						 component={props => <SignInPage {...props} />
			<Route path={ROUTES.PASSWORD_FORGET} 
						 component={props => <PasswordForgetPage {...props} />
			<Route path={ROUTES.HOME} 
						 component={props => <HomePage {...props} />
			<Route path={ROUTES.ACCOUNT} 
						 component={props => <AccountPage {...props} />
			<Route path={ROUTES.ADMIN} 
						 component={props => <AdminPage {...props} />
		</div>
	</Router>
);

export default App;