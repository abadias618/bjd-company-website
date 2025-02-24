import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import OneService from "../../components/oneService"
import { 
  FaChartLine, 
  FaPeopleArrows, 
  FaChartPie, 
  FaLightbulb,
  FaPhotoVideo
} from 'react-icons/fa';


const MarketingPage = () => {
  const serviceDetails = {
    title: "AI Marketing Strategies",
    subtitle: "Transforming Data into Strategic Marketing Insights",
    overview: `Our Expertise in Marketing & Creative Technologies Creative & Video Production
              Adobe Creative Cloud - High-quality graphic design, branding, and professional video editing.
              Davinci Resolve - Advanced color grading and cinematic-quality video production.
              Sony FX3 - High-resolution video for ads, social media, and brand storytelling.
              Data & AI-Driven Marketing
              Analytics Dashboards - Real-time insights with Google Analytics, Looker, Power BI, and Tableau.
              AI Models - Smarter marketing with machine learning for better targeting and automation.`,
    features: [
      {
        icon: FaChartLine,
        title: "AI-driven Marketing Strategies",
        description: "Developing and implementing AI-driven marketing strategies to optimize campaigns,personalize customer experiences, and enhance decision-making processes."
      },
      {
        icon: FaPeopleArrows,
        title: "Lead Generation with Facebook and Instagram Ads",
        description: "Creating and managing targeted advertising campaigns on Facebook and Instagram to attract and convert potential leads."
      },
      {
        icon: FaChartPie,
        title: "Content Calendar Optimization",
        description: "Planning and optimizing a content calendar to ensure consistent and strategic content distribution across various platforms."
      },
      {
        icon: FaLightbulb,
        title: "Blog and Articles for Brand Awareness",
        description: "Writing and publishing high-quality blog posts and articles to enhance brand visibility and authority."
      },
      {
        icon: FaPhotoVideo,
        title: "Video Ads Production (Vertical and Horizontal Formats)",
        description: "Producing engaging video advertisements in both vertical and horizontal formats suitable for various social media platforms."
      }
    ],
    pricing: [
      { tier: "AI-driven marketing strategies", price: "$2,000 - $5,000/month", features: ["Core Analytics", "Monthly Reports"] },
      { tier: "Targeted Advertising", price: "$1,500 - $4,000/month", features: ["Advanced Analytics", "Weekly Reports", "Custom Dashboards"] },
      { tier: "Content Calendar Optimization", price: "$1,000 - $2,500/month", features: ["Full Suite", "Real-time Monitoring", "Dedicated Support"] },
      { tier: "Blog and Articles for Brand Awareness", price: "$150 - $500/article", features: ["Full Suite", "Real-time Monitoring", "Dedicated Support"] },
      { tier: "Video Ads Production (Vertical and Horizontal Formats)", price: "$2,000 - $7,000/video", features: ["Full Suite", "Real-time Monitoring", "Dedicated Support"] }
    ]
  };
  return (
    <Layout>
      <OneService serviceDetails={serviceDetails}/>
    </Layout>
  )
}

export const Head = () => <Seo title="Marketing" />

export default MarketingPage
