import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404" />
      <h1>404: یچیزی یافت نشد.</h1>
      <p>شما آدرسی را انتخاب کردید که وجود ندارد.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
