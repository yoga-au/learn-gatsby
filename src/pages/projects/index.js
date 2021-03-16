// This index js will refer to http/localhost/projects[current folder name]
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

export default function Index() {
	return (
		<Layout>
			<div className={styles.portfolio}>
				<h2>Portofolio</h2>
				<p>Projecs and Websites I've created</p>
			</div>
		</Layout>
	)
}

