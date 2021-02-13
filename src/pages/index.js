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
        className="mb-12 block"
        onMouseOver={() => setFeaturedImage(data.image.publicURL)}
        onMouseLeave={() => setFeaturedImage(ChipsImage)}
      >
        <img src={data.image.publicURL} className="mb-2" />
        <h2 className="text-3xl mb-2 underline">{data.title}</h2>
        <p className="font-thin">{data.date}</p>
        <p className="w-full italic">{data.ingredients}</p>
      </Link>
    )
  })

  return (
    <Layout>
      <SEO title="Home" />
      <div className="grid grid-cols-2 h-full overflow-hidden">
        <div className="overflow-scroll p-8">{recipes}</div>
        <div className="border-l border-black h-full flex flex-col justify-center p-8 max-h-full">
          <img src={featuredImage} />
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
