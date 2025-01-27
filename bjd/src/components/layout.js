/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Navbar from "./navbar"

const links = [
  { url:"/page-2",
    text: "Page 2",
  },
  { url:"/404",
    text:"Page 3"
  },
  { url:"/404",
    text:"Page 4"
  },
  { url:"/404",
    text:"Page 5"
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
  /*<Header siteTitle={data.site.siteMetadata?.title || `Title`} navLinks={links} /> */
  return (
    <>
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
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
