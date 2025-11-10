import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NovelCard = () => {
  return (
    <div className="container my-4 d-flex justify-content-center">
      <div
        className="d-flex flex-column flex-md-row border rounded shadow-sm overflow-hidden"
        style={{
          width: "700px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        {/* Left Image Section */}
        <div
          className="d-flex align-items-center justify-content-center bg-light"
          style={{
            width: "35%",
            minHeight: "250px",
          }}
        >
          <i className="bi bi-person fs-1 text-secondary"></i>
        </div>

        {/* Right Content Section */}
        <div className="p-4" style={{ width: "65%" }}>
          <p
            className="mb-1 text-muted"
            style={{ fontSize: "0.9rem", marginBottom: "0" }}
          >
            Genre
          </p>

          <h5 className="fw-bold mb-2" style={{ fontSize: "1.25rem" }}>
            Novel Name
          </h5>

          <div className="mb-3">
            <span
              className="text-primary me-3"
              style={{ fontSize: "0.95rem", cursor: "pointer" }}
            >
              Author Name
            </span>
            <span
              className="text-primary"
              style={{ fontSize: "0.95rem", cursor: "pointer" }}
            >
              Writer Name
            </span>
          </div>

          <p
            className="text-muted"
            style={{
              fontSize: "0.9rem",
              lineHeight: "1.5",
              marginBottom: "1.5rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Tempor sed lectus mauris luctus euismod. At
            tristique sed ut suspendisse nam. Malesuada magna wisi enim ad minim
            veniam, quis nostrud exerci tation.
          </p>

          <div
            className="d-flex justify-content-center align-items-center text-white rounded-bottom"
            style={{
              background: "linear-gradient(90deg, #5a67d8, #4c51bf)",
              padding: "10px 0",
              borderRadius: "8px",
            }}
          >
            <span style={{ fontSize: "0.95rem", fontWeight: "500" }}>
              Apply for Position
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelCard;
