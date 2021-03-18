/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
	plugins: [
		'gatsby-transformer-remark',
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`, // Needed for dynamic images
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `project-content`,
			  path: `${__dirname}/src/projects-content/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `images`,
			  path: `${__dirname}/src/images/`,
			},
		}
	],
	// equal to <head> in html?? (need confirm)
	siteMetadata: {
		title: 'Web Warrior',
		description: 'Website developed for portfolio and training',
		contact: 'yoga@yogaau.com'
	}
}
