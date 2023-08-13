import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Home from './pages/Home.jsx';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={Login} />
					<Route path="/home" element={Home} />
					<Route path="/profile/:userId" element={Profile} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
