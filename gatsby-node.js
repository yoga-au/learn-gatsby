const path = require('path')

// export createPages function that have async function to grab slug in graphql
// using graphql and actions arguments
exports.createPages = async({ graphql, actions }) => {
	
	// store the response data from graphql query in [data] variable (use object destructure)
	const { data } = await graphql(`
	query Project {
		allMarkdownRemark {
		  nodes {
			frontmatter {
			  slug
			}
		  }
		}
	  }
	`) 

	// loop each object in nodes array and fire actions.createPage function
	data.allMarkdownRemark.nodes.forEach((node) => {
		actions.createPage({
			// this is a route/path to the detail page
			path: `/projects/${node.frontmatter.slug}`,
			// choose component to use as template, use [path] nodeJS API and use resolve method
			// to pass an absolute path to the component
			component: path.resolve('./src/templates/project-detail.js'),
			// to pass a variable to the template component
			// it pass an object and every properties in the object act like variable
			// variable will be used for query variable in template component
			context: { slug: node.frontmatter.slug }
		})
	})
}
