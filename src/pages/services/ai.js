import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import OneService from "../../components/oneService"
import { 
  FaChartLine, 
  FaCode, 
  FaChartPie, 
  FaLightbulb 
} from 'react-icons/fa';


const MarketingPage = () => {
  const serviceDetails = {
    title: "AI-Powered Financial Analytics",
    subtitle: "Transforming Data into Strategic Insights",
    overview: "A comprehensive solution that leverages artificial intelligence to provide deep financial insights and predictive analytics.",
    features: [
      {
        icon: FaChartLine,
        title: "Real-time Financial Tracking",
        description: "Instant monitoring of financial metrics with AI-driven insights."
      },
      {
        icon: FaCode,
        title: "Advanced Predictive Modeling",
        description: "Machine learning algorithms that forecast financial trends."
      },
      {
        icon: FaChartPie,
        title: "Comprehensive Reporting",
        description: "Detailed, customizable financial reports and dashboards."
      },
      {
        icon: FaLightbulb,
        title: "Strategic Recommendations",
        description: "AI-generated actionable insights for business growth."
      }
    ],
    pricing: [
      { tier: "Basic", price: "$499/month", features: ["Core Analytics", "Monthly Reports"] },
      { tier: "Pro", price: "$999/month", features: ["Advanced Analytics", "Weekly Reports", "Custom Dashboards"] },
      { tier: "Enterprise", price: "Custom", features: ["Full Suite", "Real-time Monitoring", "Dedicated Support"] }
    ]
  };
  return (
    <Layout>
      <OneService serviceDetails={serviceDetails}/>
    </Layout>
  )
}

export const Head = () => <Seo title="AI" />

export default MarketingPage
