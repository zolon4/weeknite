import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="px-8 fixed right-0 left-0 h-20 bg-white border-b border-black">
    <div className="flex items-center justify-between w-full h-full">
      <Link to="/" className="text-2xl font-couch text-red-500">
        {siteTitle}
      </Link>
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
