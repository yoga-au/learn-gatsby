import { Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
		<section className={styles.header}>
			<div>
				<h2>Design</h2>
				<h3>Develop and Deploy</h3>
				<p>UI Designer and Web Developer from Depok</p>

				<Link className={styles.btn} to="/projects">Portfolio</Link>
			</div>
		</section>
	</Layout>
  )
}
