import React from "react"
import readingTime from "reading-time"
import { rhythm, scale } from "../utils/typography"
import Image from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

function ShortBio({ post }) {
  return (
    <StaticQuery
      query={shortBioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        const { avatar } = data

        return (
          <div
            style={{
              display: `flex`,
            }}
          >
            <Image
              fixed={avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />

            <div>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                  color: "black",
                }}
              >
                {author}
              </p>
              <p
                style={{
                  ...scale(-1.5 / 5),
                  display: `block`,
                  marginTop: rhythm(-1),
                  color: "grey",
                }}
              >
                {post.frontmatter.date} &#183; {readingTime(post.html).text}
              </p>
            </div>
          </div>
        )
      }}
    />
  )
}

const shortBioQuery = graphql`
  query ShortBioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default ShortBio
