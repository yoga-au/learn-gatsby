import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Navbar = () => {
	const data = useStaticQuery(graphql`
		query GetMetadataTitle {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	// console.log(data)
	const { title } = data.site.siteMetadata

	return (
		<nav>
			<h1>{ title }</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/projects">Projects & Portfolio</Link>
			</div>
		</nav>
	)
}

export default Navbar

