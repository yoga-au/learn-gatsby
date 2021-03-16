import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
	return (
		<nav>
			<h1>Web Warrior</h1>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/projects">Projects & Portfolio</Link>
		</nav>
	)
}

export default Navbar

