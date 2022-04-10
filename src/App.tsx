import React from 'react'
import logo from './logo.svg'
import './App.css'
import Shoppinglist from './Components/Shoppinglist'

function App() {
	return (
		<div className='App bg-gray-200'>
			<header className='App-header'>
				<Shoppinglist />
			</header>
		</div>
	)
}

export default App
