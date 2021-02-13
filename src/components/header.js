import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="p-8">
    <div className="flex items-center justify-between w-full">
      <p className="text-4xl font-heading">{siteTitle}</p>
      <div className="flex">
        <Link to="/about" className="text-lg underline mr-4">
          about
        </Link>
        <Link to="/about" className="text-lg underline mr-4">
          gear
        </Link>{" "}
        <Link to="/about" className="text-lg underline">
          submit
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
