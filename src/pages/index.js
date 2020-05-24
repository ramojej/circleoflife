import React from "react"
import Layout from "../components/Layout"
import Hero from "../sections/Hero"
import Services from "../sections/Services"
import Doctor from "../sections/Doctor"
import Promo from "../sections/Promo"
import Blog from "../sections/Blog"
import SEO from "../components/SEO"

export default () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Services />
    <Doctor />
    <Promo />
    <Blog />
  </Layout>
)
