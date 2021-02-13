import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <div className="flex-grow w-full h-full items-center justify-center flex max-w-5xl mx-auto">
        <p className="font-heading text-6xl prose">
          weeknite is a recipe commune consisting of easy, low effort recipies
          designed to be made pre or post weekend. Most recipies feature
          ingredients received through imperfect foods{" "}
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
