import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Navbar />
			<div className="content">
				{ children }
			</div>
			<footer>
				Copyright 2021 Web Warrior
			</footer>
		</div>
	)
}

export default Layout
