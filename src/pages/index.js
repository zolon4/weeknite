import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ChipsImage from "../images/chips.jpg"

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  console.log(edges)

  const [featuredImage, setFeaturedImage] = useState(ChipsImage)

  let recipes = edges.map((r, i) => {
    let data = r.node?.frontmatter

    return (
      <Link
        to={data.path}
        className="mb-6 block"
        onMouseOver={() => setFeaturedImage(data.image.publicURL)}
        onMouseLeave={() => setFeaturedImage(ChipsImage)}
      >
        <h2 className="text-3xl font-heading mb-2">{data.title}</h2>
        <p className="font-thin">{data.date}</p>
        <p className="w-full md:w-1/2">{data.ingredients}</p>
      </Link>
    )
  })

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-col flex-col-reverse md:grid md:grid-cols-2 md:flex-grow pt-8">
        <div className="h-full overflow-scroll">{recipes}</div>
        <div className="w-full flex flex-col row-span-1">
          <img src={featuredImage} className="w-full object-contain" />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query recipes {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            path
            author
            title
            date
            ingredients
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`

export default IndexPage
