/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
      <span>&#169;</span> Prativa Blog, Made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <Link to="https://parentheses.co.in/">parentheseslabs.in</Link>
      </p>
    </div>
  </footer>
)

export default Footer
