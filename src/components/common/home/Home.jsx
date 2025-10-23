import React from 'react'
import "./Home.css"
import EditorSidebar from '../sidebar/EditorSidebar'
const Home = () => {
  return (
    <div className="Home-container">
        <div className="sidebar">
            <EditorSidebar/>
        </div>
        <div className="heaer-content">

        </div>
    </div>
  )
}

export default Home