import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ServicesComp from "../components/servicesComp"

const ServicesPage = () => (
  <Layout>
    <ServicesComp></ServicesComp>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default ServicesPage
