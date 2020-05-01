import React from "react"
import Layout from "../components/Layout"
import Button from "../components/Button"
import Hero from "../sections/Hero"
import About from "../sections/About"

export default () => (
  <Layout>
    Hello world!
    <Button title="Lets go" className="mt-6 block" />
    <Hero />
    <About />
  </Layout>
)
