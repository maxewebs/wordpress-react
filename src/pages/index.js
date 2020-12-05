import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TypewriterText from '../components/typewriter_text'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section className="section_container">
      <TypewriterText text={'Hi!'} />
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
      }
    }
  }
`
