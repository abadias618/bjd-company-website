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
  { url:"/about",
    text: "About",
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
            marginLeft: `var(--space-5)`
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
