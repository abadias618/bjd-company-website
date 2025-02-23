import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import OneService from "../../components/oneService"


const MarketingPage = () => (
  <Layout>
    <OneService></OneService>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default MarketingPage
