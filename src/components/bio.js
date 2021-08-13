import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <div
        className="bio-avatar"
        style={{
          width: 50,
          height: 50,
          backgroundColor: "lightgray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.2rem",
        }}
      >
        ح.ر
      </div>
      {author?.name && (
        <p>
          نوشته شده توسط <strong>{author.name}.</strong>{" "}
          {author?.summary || null}
        </p>
      )}
    </div>
  )
}

export default Bio
