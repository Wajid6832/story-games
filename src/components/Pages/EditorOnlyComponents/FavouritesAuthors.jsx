import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaImage, FaSearch } from "react-icons/fa";

const AuthorCard = ({ name }) => (
  <div className="text-center">
    <div
      className="border rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 bg-light"
      style={{ width: "64px", height: "64px" }}
    >
      <FaUser size={24} />
    </div>
    <div className="small fw-medium text-dark">{name}</div>
  </div>
);

const LogCard = () => (
  <div
    className="border rounded d-flex align-items-center justify-content-center bg-light"
    style={{ aspectRatio: "3 / 4" }}
  >
    <FaImage size={40} />
  </div>
);

const FavoritesPage = () => {
  const [activeTab, setActiveTab] = useState("authors");
  const [searchTerm, setSearchTerm] = useState("");

  const authors = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    name: "Author Name",
  }));

  const logs = Array.from({ length: 32 }, (_, i) => ({ id: i + 1 }));

  return (
    <div className="container py-4">
      {/* Header Row */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-semibold mb-0">Favorites</h1>
        <div className="position-relative">
          <input
            type="text"
            className="form-control ps-4"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "200px", backgroundColor: "#f8f9fa" }}
          />
          <FaSearch
            size={14}
            color="#999"
            className="position-absolute"
            style={{
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
            }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="d-flex border-bottom mb-4">
        <button
          className={`btn border-0 rounded-0 px-3 py-2 ${
            activeTab === "authors"
              ? "border-bottom border-primary text-primary fw-semibold"
              : "text-secondary"
          }`}
          onClick={() => setActiveTab("authors")}
        >
          Authors
        </button>
        <button
          className={`btn border-0 rounded-0 px-3 py-2 ${
            activeTab === "adventure-logs"
              ? "border-bottom border-primary text-primary fw-semibold"
              : "text-secondary"
          }`}
          onClick={() => setActiveTab("adventure-logs")}
        >
          Adventure Logs
        </button>
      </div>

      {/* Authors Grid */}
      {activeTab === "authors" && (
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 g-3">
          {authors.map((author) => (
            <div key={author.id} className="col">
              <AuthorCard name={author.name} />
            </div>
          ))}
        </div>
      )}

      {/* Logs Grid */}
      {activeTab === "adventure-logs" && (
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 g-3">
          {logs.map((log) => (
            <div key={log.id} className="col">
              <LogCard />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
