// This index js will refer to http/localhost/projects[current folder name]
import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

export default function Index({ data }) {
	// console.log(data)
	const projects = data.content.nodes
	// console.log(projects)

	return (
		<Layout>
			<div className={styles.portfolio}>
				<h2>Portofolio</h2>
				<p>Projecs and Websites I've created</p>

				<div className={styles.projects}>
					{projects.map((project) => (
						<>
							<Link to={ project.frontmatter.slug } key={ project.id }>
								<h3>{ project.frontmatter.title }</h3>
								<p>{ project.frontmatter.stack }</p>	
							</Link>
						</>
					))}
				</div>

				<p>What do you think? If you want to collaborate with me, I'm available at { data.contact.siteMetadata.contact }</p>
			</div>
		</Layout>
	)
}

// export page query
export const query = graphql`
	query ProjectsPage {
		content: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
			nodes {
			  frontmatter {
				slug
				stack
				title
			  }
			  id
			}
		  }
		contact: site {
			siteMetadata {
			  contact
			}
		  }
	}
`
