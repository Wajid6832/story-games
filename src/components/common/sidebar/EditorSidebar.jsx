import React, { useState } from 'react'
import Logo from "../../../assets/logo.png"
import Menue from "../../../assets/menu.png"
import Profile from "../../../assets/profile.png"
import Novels from "../../../assets/novels.png"
import Producer from "../../../assets/producer.png"
import Application from "../../../assets/applications.png"
import Favourites from "../../../assets/favourites.png"
import Mail from "../../../assets/mail.png"
import Logout from "../../../assets/logout.png"
import style from "./EditorSidebar.module.css"
import { NavLink } from 'react-router-dom'
const EditorSidebar = () => {
    const [isOpen, SetIsopen] = useState(false);

    const handleOpen = () => {
        SetIsopen(!isOpen);
    }

    if (!isOpen) {
        return (
            <div className='shoe-menue'>
                <div className="manue">
                    <button onClick={handleOpen}>
                        <img src={Menue} alt="menue" />
                    </button>
                </div>
                <div className="shoe-manue-links">
                    <NavLink className="navlinks">
                        <div className="links">
                            <div className="img-links">
                                <img src={Novels} alt="Profile" />
                            </div>

                        </div>
                    </NavLink>

                    <NavLink className="navlinks">
                        <div className="links">
                            <div className="img-links">
                                <img src={Producer} alt="Profile" />
                            </div>

                        </div>
                    </NavLink>

                    <NavLink className="navlinks">
                        <div className="links">
                            <div className="img-links">
                                <img src={Application} alt="Profile" />
                            </div>
                        </div>
                    </NavLink>

                    <NavLink className="navlinks">
                        <div className="links">
                            <div className="img-links">
                                <img src={Favourites} alt="Profile" />
                            </div>
                        </div>
                    </NavLink>

                    <NavLink className="navlinks">
                        <div className="links">
                            <div className="img-links">
                                <img src={Mail} alt="Profile" />
                            </div>
                        </div>
                    </NavLink>
                </div>

            </div>
        )
    }
    if (isOpen) {
        return (
            <div className='sidebar-container'>
                <div className="container upper-container">
                    <div className="upper-conent">
                        <div className="storyhost-manue">
                            <div className="sotry-book d-flex justify-content-between align-content-center">
                                <div className="img">
                                    <img src={Logo} alt="logo" />
                                </div>
                                <div className='story-text'>
                                    <p>Story Host</p>
                                </div>
                            </div>
                            <div className="manue">
                                <button onClick={handleOpen}>
                                    <img src={Menue} alt="menue" />
                                </button>
                            </div>
                        </div>
                        <div className="links-list">
                            <NavLink className="navlinks">
                                <div className="links">
                                    <div className="img-links">
                                        <img src={Profile} alt="Profile" />
                                    </div>
                                    <div className={style.linkText}>
                                        <p>Profile</p>
                                    </div>
                                </div>
                            </NavLink>



                            <NavLink className="navlinks">
                                <div className="links">
                                    <div className="img-links">
                                        <img src={Novels} alt="Profile" />
                                    </div>
                                    <div className="link-text">
                                        <p>Current Novels</p>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink className="navlinks">
                                <div className="links">
                                    <div className="img-links">
                                        <img src={Producer} alt="Profile" />
                                    </div>
                                    <div className="link-text">
                                        <p>Become a Producer</p>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink className="navlinks">
                                <div className="links">
                                    <div className="img-links">
                                        <img src={Application} alt="Profile" />
                                    </div>
                                    <div className="link-text">
                                        <p>Open Application</p>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink className="navlinks">
                                <div className="links">
                                    <div className="img-links">
                                        <img src={Favourites} alt="Profile" />
                                    </div>
                                    <div className="link-text">
                                        <p>Favorites</p>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink className="navlinks">
                                <div className="links">
                                    <div className="img-links">
                                        <img src={Mail} alt="Profile" />
                                    </div>
                                    <div className="link-text">
                                        <p>Messages</p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="container lower-container">
                    <div className="common-lowercontent mode-on-of">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="switchCheckDefault"
                                defaultChecked
                            />
                            <label className="form-check-label" htmlFor="switchCheckDefault">
                                Read mode of
                            </label>
                        </div>

                    </div>
                    <div className="common-lowercontent suprot">
                        <NavLink>
                            <div className='d-flex'>
                                <img src={Logout} alt="Logout" />
                                <p>Logout</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="common-lowercontent sign-out">

                    </div>
                </div>

            </div>
        )
    }
}

export default EditorSidebar