import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import * as styles from '../styles/project-detail.module.css'

export default function ProjectDetail() {
	return (
		<Layout>
			<div className={styles.details}>
				<h2>title</h2>
				<h3>stack</h3>
			</div>
			<div className={styles.featured}>
				{/* <Img fluid={} /> */}
			</div>
			{/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
		</Layout>
	)
}
