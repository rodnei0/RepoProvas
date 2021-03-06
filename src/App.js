import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import ResetStyleCSS from './styles/ResetStyleCSS';
import GlobalStyle from './styles/GlobalStyle';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Tests from './pages/Tests';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<ResetStyleCSS />
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/tests" element={<Tests />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;