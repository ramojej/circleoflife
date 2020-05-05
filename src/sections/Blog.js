import React from "react"
import FeaturedBlog from "../components/Blog/FeaturedBlog"

const Blog = () => {
  return (
    <section className="py-6 lg:py-16">
      <div className="container">
        <h2 className="font-bold text-3xl text-center mb-10">Blog</h2>
        <FeaturedBlog />
      </div>
    </section>
  )
}

export default Blog
