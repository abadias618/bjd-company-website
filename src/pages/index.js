import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Parallax from "../components/parallax"
import parallaxImage from "../images/parallax.jpg"
import BackgroundShift from "../components/background"
import GridLayout from "../components/grid"
import TwoColumns from "../components/twoColumns"
import Carousel from "../components/carousel"

const links = [
  {
    text: "Data Analysis and Preprocessing",
    url: "/services",
    description:
      `Prepare your data for AI success! We offer comprehensive data cleaning, 
      normalization, and transformation to get your data model-ready.
      Our services also include data labeling and augmentation for effective
      supervised learning and seamless data pipeline development for optimal
      AI model flow.`,
  },
  {
    text: "Natural Language Processing (NLP) Solutions",
    url: "/services",
    description:
      `Revolutionize customer interactions with our NLP solutions! We develop
      intelligent chatbots and virtual assistants for automated customer service.
      Leverage sentiment analysis for insightful market research and customer feedback.
      Plus, our text mining and document summarization services help you extract
      valuable knowledge effortlessly.`,
  },
  {
    text: "AI-Driven Marketing Solutions",
    url: "/services",
    description:
      `Supercharge your marketing strategy with AI! Gain real-time insights through
      advanced analytics dashboards using Google Analytics, Looker, Power BI, and
      Tableau. Our AI models enhance targeting and automate marketing efforts,
      driving smarter decisions and better results.`,
  },
  {
    text: "AI for Customer Relationship Management (CRM)",
    url: "/services",
    description:
      `Enhance customer interactions with AI-powered CRM tools! Streamline customer
      support with automation and real-time chatbots. Boost engagement and satisfaction
      by efficiently managing inquiries and interactions.`,
  },
  {
    text: "Financial Planning & Growth Strategies",
    url: "/services",
    description:
      `Secure your financial future! We help you diversify investments, build an
      emergency fund, and prioritize high-interest debt repayment. Maximize savings
      with automated contributions and invest in tax-advantaged accounts. We also
      guide business growth through profit reinvestment and regular financial goal
      adjustments.`,
  },
  {
    text: "Budgeting & Cash Flow Management",
    url: "/services",
    description:
      `Take control of your finances! Track expenses, set spending limits, and create
      cash reserves for unexpected costs. Prioritize essential bills, automate payments,
      and analyze income versus expenses to uncover savings opportunities and enhance
      cash flow.`,
  },
  {
    text: "Financial Statements & Reporting",
    url: "/services",
    description:
      `Gain financial clarity! We prepare detailed income statements, balance sheets,
      and cash flow statements to monitor liquidity and performance. Our variance
      analysis and quarterly reports help you make informed decisions and keep
      stakeholders informed.`,
  },
  {
    text: "Profitability & Cost Optimization",
    url: "/services",
    description:
      `Maximize profitability and minimize costs! Optimize operations with automation,
      adjust pricing strategies, and negotiate better supplier contracts. Improve
      inventory management, streamline production, and phase out underperforming
      products to enhance overall efficiency.`,
  },

]

const parallaxText = `Our Services:`

const IndexPage = () => (
  <Layout>
    <BackgroundShift>
      <GridLayout></GridLayout>
    </BackgroundShift>
    <Parallax imageSrc={parallaxImage} text={parallaxText}/>
    <Carousel></Carousel>
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
