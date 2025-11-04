import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
import { useLocation } from "react-router-dom"; 
import { routesHeadings } from "../../utils/constant";
import { useEffect, useState } from "react";
import { handlePageSearch } from "../../utils/functions";
function Navbar() {
  const [heading, setHeading] = useState('')
    const location = useLocation();
    useEffect(() => {
      const currentLocation = location.pathname;
      if (currentLocation && currentLocation in routesHeadings) {
        const value = routesHeadings[currentLocation];
        setHeading(value);
      } else {
        setHeading('No Heading For Route');
      }
    }, [location])
  return (
    <div className={style.homeHeader}>
          <Link to="/">
            <h4 className={style.homeTitle}>{heading}</h4>
          </Link>
          <div className={style.searchBar}>
            <input
              type="search"
              placeholder="Search"
              className={style.searchInput}
              onChange={e => handlePageSearch(e.target.value, location.pathname)}
            />
          </div>
        </div>
  )
}

export default Navbar