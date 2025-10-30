import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../NovalPage/noval.css";

const NovelModal = ({ show = true, onHide, novel }) => {
  const data = novel || {
    genre: "Genre",
    title: "Novel Name",
    author: "Author Name",
    writer: "Writer Name",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Tempor sed lectus mauris luctus euismod.",
    image: null,
  };

  if (!show) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      dialogClassName="novel-modal-dialog"
    >
      <div className="novel-card">
        {/* Close Button */}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onHide}
        ></button>

        {/* Left Image Section */}
        <div className="novel-left">
          <div className="image-placeholder">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="placeholder-icon"
            >
              <path d="M4 3H20C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3ZM4 5V19H20V5H4ZM8.5 13.5L11 16.5L14.5 12L19 18H5L8.5 13.5Z" />
            </svg>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="novel-right">
          <p className="novel-genre">{data.genre}</p>
          <h4 className="novel-title">{data.title}</h4>
          <div className="novel-authors">
            <span className="author">{data.author}</span>
            <span className="dot">•</span>
            <span className="writer">{data.writer}</span>
          </div>

          <p className="novel-description">{data.description}</p>

          <Button className="novel-button">
            Read Chapter 1 of 13 for Free and Meet the Characters{" "}
            <span className="arrow">›</span>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default NovelModal;
