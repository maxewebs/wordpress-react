import React from 'react'

const TypewriterText = ({ text }) => (
  <React.Fragment>
    <div className="typewriter_text-container">
      <h1 className="typewriter_text">{text}</h1>
    </div>
  </React.Fragment>
)

export default TypewriterText

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
