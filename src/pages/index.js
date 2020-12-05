import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />

      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      <section className="posts-container">
        {data.allWpPost.nodes.map((post) => (
          <div className="post-preview" key={post.slug}>
            <Image className="featured-image" fluid={post.featuredImage.node.localFile.childImageSharp.fluid} />
            <Link to={post.slug}>
              {post.title}
            </Link>
            <div className='excerpt' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </div>
        ))}
      </section>

  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query {
  allWpPost(sort: { fields: [date] }) {
      nodes {
          title
          excerpt
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid {
                    src
                    aspectRatio
                    base64
                    originalImg
                    originalName
                    presentationHeight
                    presentationWidth
                    sizes
                    srcSet
                    srcSetWebp
                    srcWebp
                  }
                }
              }
            }
          }
      }
  }
}
`
