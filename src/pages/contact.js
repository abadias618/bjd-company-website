import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactUs from "../components/contactUs"

const ContactPage = () => (
  <Layout>
    <ContactUs></ContactUs>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Contact Us" />

export default ContactPage
