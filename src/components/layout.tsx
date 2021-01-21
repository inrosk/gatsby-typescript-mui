/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

const Layout = ({ children }: Props) => {
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
      <Header />
      <div>
        <main id="wrapper">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
