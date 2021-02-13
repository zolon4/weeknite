import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <div className="flex-grow w-full h-full items-center justify-center flex max-w-5xl mx-auto">
        <p className="font-heading text-6xl prose">
          Weeknite is a recipe commune consisting of easy, low effort recipies
          designed to be made pre or post weekend. The recipes here are original
          vegetarian friendly beacuse it's really not that hard
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
