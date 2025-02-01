import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/bjd-favicon.png"

const Header = ({ siteTitle, navLinks }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: `var(--color-navbar)`
    }}
  >
    <img
      alt="logo"
      height={40}
      style={{ margin: 5 }}
      src={logo}
    />
    <Link
      to="/"
      style={{
        fontSize: `var(--font-lg)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <div style={{
      display: 'flex',
      justifyContent:
      'flex-end',
      flexGrow: 1 }}>
        {navLinks.map(link => (
            <Link
              to={link.url}
              style={{
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
                margin: `5px`
              }}>
              {link.text}
            </Link>
          ))}
    </div>
    
  </header>
)

export default Header
