/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Navbar from "./navbar"

const links = [
  { url:"/",
    text: "Home",
  },
  { url:"/#about-section",
    text: "About Us",
  },
  { url:"/services",
    text:"Services"
  },
  { url:"/contact",
    text:"Contact"
  },
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div style={{paddingTop:`100px`}}></div>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} navLinks={links} />
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> by Abdias Baldiviezo
        </footer>
      </div>
    </>
  )
}

export default Layout
