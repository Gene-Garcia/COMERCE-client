import React, { useState, createContext, useReducer } from 'react';

// Reducer
import AuthUserReducer from './AuthUserReducer';

// Initial state
const initialState = {
	isLoggedIn: false,
	user: { username: '', email: '' }
};

const AuthUserContext = createContext();
export default AuthUserContext;

function AuthUserProvider({ children }) {
	const [ state, dispatch ] = useReducer(AuthUserReducer, initialState);

	function signInUser() {
		dispatch({
			type: 'SIGN_IN_USER',
			payload: true
		});
	}

	function signOutUser() {
		dispatch({
			type: 'SIGN_OUT_USER',
			payload: false
		});
	}

	function saveUser(user) {
		dispatch({
			type: 'SAVE_USER',
			payload: user
		});
	}

	return (
		<AuthUserContext.Provider
			value={{
				isLoggedIn: state.isLoggedIn,
				user: state.user,
				signInUser,
				signOutUser,
				saveUser
			}}
		>
			{children}
		</AuthUserContext.Provider>
	);
}
