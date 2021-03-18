import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import * as styles from '../styles/project-detail.module.css'
import { graphql } from 'gatsby'

export default function ProjectDetail({ data }) {
	// console.log(data)

	const { html } = data.markdownRemark
	const { stack, title, feature } = data.markdownRemark.frontmatter

	// console.log(stack, title, feature)
	
	return (
		<Layout>
			<div className={styles.details}>
				<h2>{ title }</h2>
				<h3>{ stack }</h3>
			</div>
			<div className={styles.featured}>
				<Img fluid={feature.childImageSharp.fluid} />
			</div>
			<div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
		</Layout>
	)
}

// $slug is query variable from context: {slug} in gatsby-node.js
export const query = graphql`
query ProjectDetail($slug: String) {
	markdownRemark(frontmatter: {slug: {eq: $slug}}) {
	  html
	  frontmatter {
		stack
		title
		feature {
		  childImageSharp {
			fluid {
			  ...GatsbyImageSharpFluid
			}
		  }
		}
	  }
	}
  }
`
