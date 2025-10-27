import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Favourite/Autho.module.css";
import iconImage from "../../../../assets/icon.png";
import Modalsetup4 from "../../../Modal/Common-Modal/Modalsetup4";
import { CommonModal } from "../../../Modal/Common-Modal/Modal";
const AuthorCard = ({ name, image }) => (
   
  <div className="text-center">
    <div className={`mx-auto mb-2 border rounded-circle d-flex align-items-center justify-content-center bg-light ${styles.iconCircle}`}>
      <img src={image} alt={name} className={styles.iconImage} />
    </div>
    <div className="small fw-medium text-dark">{name}</div>
  </div>
)

const LogCard = ({ image }) => (
  <div className={`rounded shadow-sm d-flex align-items-center justify-content-center bg-light ${styles.logCard}`}>
    <img src={image} alt="Log" className={styles.logImage}/>
  </div>
);
 
const FavoritesPage = () => {
  const [activeTab, setActiveTab] = useState("authors");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const [openModal, setOpenModal] = useState(false);
     const [selectedWorkRoom, setSetselectedWorkRoom] = useState(null);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const authors = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i + 1,
        name: `Author ${i + 1}`,
        image: iconImage,
      })),
    []
  );

  const logs = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i + 1,
        image: iconImage,
      })),
    []
  );

  const filteredAuthors = useMemo(
    () =>
      authors.filter((a) =>
        a.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, authors]
  );

  return (
    <>
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <button
              className={`nav-link fw-semibold ${
                activeTab === "authors" ? "active text-primary" : "text-secondary"
              }`}
              onClick={() => setActiveTab("authors")}
            >
              Authors
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link fw-semibold ${
                activeTab === "adventure-logs" ? "active text-primary" : "text-secondary"
              }`}
              onClick={() => setActiveTab("adventure-logs")}
            >
              Adventure Logs
            </button>
          </li>
        </ul>

        <div className="container-fluid">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3">
            {activeTab === "authors"
              ? filteredAuthors.map(({ id, name, image }) => (
                  <div key={id} className="col">
                    <AuthorCard name={name} image={image} />
                  </div>
                ))
              : logs.map(({ id, image }) => (
                  <div 
                    key={id} 
                    className="col"   
                    onClick={() => {
                      setOpenModal(true); 
                                             setSetselectedWorkRoom(id);
                                             console.log(setSetselectedWorkRoom);

                    }}
                  >
                    <LogCard image={image} />
                  </div>
                ))}
          </div>
        </div>

      {openModal && (
        <CommonModal
          show={openModal}
                  selectedWorkRoom={selectedWorkRoom}
          onHide={() => setOpenModal(false)} 
        >
          <Modalsetup4 onHide={() => setOpenModal(false)} 
/>
        </CommonModal>
      )}
      </>
  );
};

export default FavoritesPage;