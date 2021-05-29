import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { Me } from "../components/me"
import { Stack } from "../components/stack"


const IndexPage = ({location}) => {

  console.log(location.pathname)
  return (
    <Layout location={ location }>
      <Seo title="Home" />
      <Me />
      <Stack />
    </Layout>
  )
}

export default IndexPage


