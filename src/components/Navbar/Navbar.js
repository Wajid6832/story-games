import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
function Navbar() {
  return (
    <div className={style.homeHeader}>
          <Link to="/">
            <h4 className={style.homeTitle}>Home</h4>
          </Link>
          <div className={style.searchBar}>
            <input
              type="search"
              placeholder="Search"
              className={style.searchInput}
            />
          </div>
        </div>
  )
}

export default Navbar