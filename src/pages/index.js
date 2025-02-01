import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Parallax from "../components/parallax"
import parallaxImage from "../images/parallax.jpg"
import BackgroundShift from "../components/background"
import GridLayout from "../components/grid"
import TwoColumns from "../components/twoColumns"

const links = [
  {
    text: "Data Analysis and Preprocessing",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      `Data cleaning, normalization, and transformation for AI model readiness.\n
      Data labeling and augmentation for supervised learning.\n
      Data pipeline development to ensure seamless flow for AI models.`,
  },
  {
    text: "Natural Language Processing (NLP) Solutions",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      `Chatbots and virtual assistants development for customer service automation.\n
      Sentiment analysis for market research or customer feedback.\n
      Text mining and document summarization for knowledge extraction.`,
  },
  {
    text: "AI-Driven Marketing Solutions",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      `Personalized recommendation systems for e-commerce or content delivery.\n
      Customer segmentation and targeting for campaigns using AI-powered insights.\n
      Predictive analytics for lead scoring, sales forecasting, and churn prevention.`,
  },
  {
    text: "AI for Customer Relationship Management (CRM)",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      `AI-enhanced CRM tools to better manage customer interactions.\n
      AI-driven customer support automation.\n
      Chatbots and virtual assistants for handling inquiries in real time.`,
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const parallaxText = `Our Services:`

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <BackgroundShift>
      <GridLayout></GridLayout>
    </BackgroundShift>
    <Parallax imageSrc={parallaxImage} text={parallaxText}/>
    
    <ul className={styles.list} style={{padding: `3rem`}}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    

  <TwoColumns/>

  <div className={styles.textCenter}>
    <p className={styles.intro}>
      <b>Placeholder pages:</b>{" "}
      {samplePageLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <Link to={link.url}>{link.text}</Link>
          {i !== samplePageLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
      <br />
      Edit <code>src/pages/index.js</code> to update this page.
    </p>
  </div>

  {moreLinks.map((link, i) => (
    <React.Fragment key={link.url}>
      <a href={`${link.url}${utmParameters}`}>{link.text}</a>
      {i !== moreLinks.length - 1 && <> · </>}
    </React.Fragment>
  ))}

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
