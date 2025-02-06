import * as React from "react"

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
    url: "/services",
    description:
      `Data cleaning, normalization, and transformation for AI model readiness.\n
      Data labeling and augmentation for supervised learning.\n
      Data pipeline development to ensure seamless flow for AI models.`,
  },
  {
    text: "Natural Language Processing (NLP) Solutions",
    url: "/services",
    description:
      `Chatbots and virtual assistants development for customer service automation.\n
      Sentiment analysis for market research or customer feedback.
      Text mining and document summarization for knowledge extraction.`,
  },
  {
    text: "AI-Driven Marketing Solutions",
    url: "/services",
    description:
      `Analytics Dashboards - Real-time insights with Google Analytics, Looker,\n
      Power BI, and Tableau.\n
      AI Models - Smarter marketing with machine learning\n
      for better targeting and automation.`,
  },
  {
    text: "AI for Customer Relationship Management (CRM)",
    url: "/services",
    description:
      `AI-enhanced CRM tools to better manage customer interactions.\n
      AI-driven customer support automation.\n
      Chatbots and virtual assistants for handling inquiries in real time.`,
  },
  {
    text: "Financial Planning & Growth Strategies",
    url: "/services",
    description:
      `Diversifying investments, setting up an emergency fund, prioritizing\n
      high-interest debt repayment, automating savings contributions, investing\n
      in tax-advantaged accounts, expanding a business through reinvestment of profits,\n
      regularly reviewing and adjusting financial goals, and seeking professional\n
      financial advice for complex decisions.`,
  },
  {
    text: "Budgeting & Cash Flow Management",
    url: "/services",
    description:
      `Tracking monthly expenses, setting spending limits for discretionary categories,\n
      creating a cash reserve for unexpected costs, prioritizing essential bills and debt\n
      payments, automating bill payments to avoid late fees, analyzing income vs. expenses\n
      to identify savings opportunities, and adjusting lifestyle choices to improve cash flow.`,
  },
  {
    text: "Financial Statements & Reporting",
    url: "/services",
    description:
      `Creating income statements to track revenue and expenses, preparing balance sheets to\n
      assess assets and liabilities, generating cash flow statements to monitor liquidity,\n
      reviewing profit and loss reports to evaluate business performance, conducting variance\n
      analysis to compare actual vs. projected financial results, and producing quarterly\n
      financial reports for stakeholders.`,
  },
  {
    text: "Profitability & Cost Optimization",
    url: "/services",
    description:
      `Reducing operational expenses through process automation, increasing product prices\n
      without sacrificing demand, renegotiating supplier contracts for better terms,\n
      outsourcing non-core functions to cut costs, improving inventory management to reduce\n
      waste, streamlining production processes to enhance efficiency, and identifying\n
      underperforming products to phase out or improve.`,
  },

]

const parallaxText = `Our Services:`

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
            href={`${link.url}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>

    <TwoColumns/>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
