import React from 'react'
import logo from './logo.svg'
import './App.css'
import Shoppinglist from './Components/Shoppinglist'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CategorizedShoppinglist from './Components/CategorizedShoppinglist'
import ErrorBoundary from './ErrorBoundary'


function App() {
	return (
		<div className='App bg-gray-200'>
			<header className='App-header'>
				<Router>
					<Routes>
						<Route path='/' element={<Shoppinglist />} />
						<Route path='/categorzied' element={<CategorizedShoppinglist />} />
					</Routes>
				</Router>
			</header>
		</div>
	)
}

export default App
