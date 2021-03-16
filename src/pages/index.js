import { Link, graphql } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home({ data }) {
	// the data props are coming from the query below
	// console.log(data)

	// use object destructure to store data in variable
	// const { title, description } = data.site.siteMetadata

	return (
		<Layout>
			<section className={styles.header}>
				<div>
					<h2>Design</h2>
					<h3>Develop and Deploy</h3>
					<p>UI Designer and Web Developer from Depok</p>

					<Link className={styles.btn} to="/projects">Portfolio</Link>
				</div>

				{/* <p>{ title } - { description }</p> */}

				<img src="/banner.png" alt="Site Banner" style={{ maxWidth: '100%' }}/>
			</section>
		</Layout>
	)
}

// syntax for get data from query in page (page query)
export const query = graphql`
	query GetMetadata {
		site {
			siteMetadata {
				description
				title
			}
		}
	}
`
