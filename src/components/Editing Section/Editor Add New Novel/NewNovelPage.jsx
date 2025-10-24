import React, { useState } from "react";
import {
  Plus,
  Upload,
  Pencil,
  Calendar,
  BookOpen,
  User,
 
} from "lucide-react";
import styles from "./NewNovel.module.css"; // <-- your modular CSS file

// Custom SVG icons
const FlowchartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M6 3h4v4H6V3zm8 0h4v4h-4V3zM4 11h6v4H4v-4zm10 0h6v4h-6v-4zm-8 8h4v4H6v-4zm8 0h4v4h-4v-4zM8 5v2H4v2h4v2h2V9h4v2h2V9h4V7h-4V5h-2v2h-4V5H8z" />
  </svg>
);

const EditDocumentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="blue"
    viewBox="0 0 24 24"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm1 7h5l-5-5z" />
  </svg>
);

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M3 6h18v2H3V6zm2 3h14l-1.5 12.5a2 2 0 0 1-2 1.5H8.5a2 2 0 0 1-2-1.5L5 9zm5 2v8h2v-8H8zm4 0v8h2v-8h-2zm2-7V2H9v2H4v2h16V4h-5z" />
  </svg>
);

export default function CreateNovelForm() {
  const [formData, setFormData] = useState({
    novelName: "",
    characterName: "",
    breakdown: "",
    chapters: "",
    closingDate: "",
    role: "",
    id: "",
    synopsis: "",
    genre: "",
    openingScene: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [uploadHover, setUploadHover] = useState(false);

  const characters = [
    { name: "Character Name", role: "Role" },
    { name: "Character Name", role: "Role" },
    { name: "Character Name", role: "Role" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Create New Novel</h1>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.sectionTitle}>Fill the boxes below:</h3>

        {/* Grid */}
        <div className={styles.formGrid}>
          {/* Novel Name */}
          <div className={styles.inputGroup}>
            <Pencil className={styles.icon} size={16} />
            <input
              type="text"
              placeholder="Create Novel Name"
              value={formData.novelName}
              onChange={(e) => handleInputChange("novelName", e.target.value)}
              onFocus={() => setFocusedField("novelName")}
              onBlur={() => setFocusedField(null)}
              className={`${styles.input} ${
                focusedField === "novelName" ? styles.inputFocused : ""
              }`}
            />
          </div>

          {/* Character Name */}
          <div className={styles.inputGroup}>
            <Pencil className={styles.icon} size={16} />
            <input
              type="text"
              placeholder="Create Character Name"
              value={formData.characterName}
              onChange={(e) =>
                handleInputChange("characterName", e.target.value)
              }
              onFocus={() => setFocusedField("characterName")}
              onBlur={() => setFocusedField(null)}
              className={`${styles.input} ${
                focusedField === "characterName" ? styles.inputFocused : ""
              }`}
            />
          </div>

          {/* Breakdown */}
          <div className={`${styles.inputGroup} ${styles.inputGroupFull}`}>
            <Pencil className={`${styles.icon} ${styles.iconTextarea}`} />
            <textarea
              placeholder="Create Character Breakdown"
              value={formData.breakdown}
              onChange={(e) => handleInputChange("breakdown", e.target.value)}
              onFocus={() => setFocusedField("breakdown")}
              onBlur={() => setFocusedField(null)}
              className={`${styles.textarea} ${
                focusedField === "breakdown" ? styles.inputFocused : ""
              }`}
            />
          </div>

          {/* Chapters (Book Icon) */}
          <div className={styles.inputGroup}>
            <BookOpen className={styles.icon} size={16} />
            <input
              type="text"
              placeholder="2 Oct 22"
              value={formData.chapters}
              onChange={(e) => handleInputChange("chapters", e.target.value)}
              onFocus={() => setFocusedField("chapters")}
              onBlur={() => setFocusedField(null)}
              className={`${styles.input} ${
                focusedField === "chapters" ? styles.inputFocused : ""
              }`}
            />
          </div>

          {/* Closing Date (Calendar Icon) */}
          <div className={styles.inputGroup}>
            <Calendar className={styles.icon} size={16} />
            <input
              type="text"
              placeholder="Select Closing Date"
              value={formData.closingDate}
              onChange={(e) => handleInputChange("closingDate", e.target.value)}
              onFocus={() => setFocusedField("closingDate")}
              onBlur={() => setFocusedField(null)}
              className={`${styles.dateInput} ${
                focusedField === "closingDate" ? styles.inputFocused : ""
              }`}
            />
          </div>

          {/* Role (User Icon) + ID + Add */}
          <div className={styles.dateGroup}>
            <div className={styles.inputGroup} style={{ flex: 1 }}>
              <User className={styles.icon} />
              <select
                value={formData.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
                onFocus={() => setFocusedField("role")}
                onBlur={() => setFocusedField(null)}
                className={`${styles.select} ${
                  focusedField === "role" ? styles.inputFocused : ""
                }`}
              >
                <option value="">Select Role</option>
                <option value="protagonist">Protagonist</option>
                <option value="antagonist">Antagonist</option>
                <option value="supporting">Supporting</option>
              </select>
            </div>

            <div className={styles.inputGroup} style={{ flex: 1 }}>
              <Pencil className={styles.icon} />
              <input
                type="text"
                placeholder="ID"
                value={formData.id}
                onChange={(e) => handleInputChange("id", e.target.value)}
                onFocus={() => setFocusedField("id")}
                onBlur={() => setFocusedField(null)}
                className={`${styles.input} ${
                  focusedField === "id" ? styles.inputFocused : ""
                }`}
              />
            </div>

            <button
              className={`${styles.addButton} ${
                hoveredButton === "add" ? styles.addButtonHover : ""
              }`}
              onMouseEnter={() => setHoveredButton("add")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Plus size={20} color="#fff" />
            </button>
          </div>

          {/* Synopsis */}
          <div className={`${styles.inputGroup} ${styles.inputGroupFull}`}>
            <Pencil className={`${styles.icon} ${styles.iconTextarea}`} />
            <textarea
              placeholder="Create Synopsis"
              value={formData.synopsis}
              onChange={(e) => handleInputChange("synopsis", e.target.value)}
              onFocus={() => setFocusedField("synopsis")}
              onBlur={() => setFocusedField(null)}
              className={`${styles.textarea} ${
                focusedField === "synopsis" ? styles.inputFocused : ""
              }`}
            />
          </div>
        </div>

        {/* Characters Section */}
        <div className={styles.charactersSection}>
          <h3 className={styles.sectionTitle}>Characters Involved</h3>
          <div className={styles.characterGrid}>
            {characters.map((char, i) => (
              <div key={i} className={styles.characterCard}>
                <div className={styles.characterName}>{char.name}</div>
                <div className={styles.characterRole}>{char.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className={styles.additionalSection}>
          <h3 className={styles.sectionTitle}>Add Additional Info</h3>

          <div
            className={`${styles.uploadArea} ${
              uploadHover ? styles.uploadAreaHover : ""
            }`}
            onMouseEnter={() => setUploadHover(true)}
            onMouseLeave={() => setUploadHover(false)}
          >
            <Upload className={styles.uploadIcon} size={24} />
            <span className={styles.uploadText}>Upload Thumbnail</span>
          </div>

          <div className={styles.formGrid}>
            <div className={`${styles.inputGroup} ${styles.inputGroupFull}`}>
              <Pencil className={styles.icon} />
              <input
                type="text"
                placeholder="Enter Genre"
                value={formData.genre}
                onChange={(e) => handleInputChange("genre", e.target.value)}
                onFocus={() => setFocusedField("genre")}
                onBlur={() => setFocusedField(null)}
                className={`${styles.input} ${
                  focusedField === "genre" ? styles.inputFocused : ""
                }`}
              />
            </div>

            <div className={`${styles.inputGroup} ${styles.inputGroupFull}`}>
              <Pencil className={`${styles.icon} ${styles.iconTextarea}`} />
              <textarea
                placeholder="Set the Opening Scene"
                value={formData.openingScene}
                onChange={(e) =>
                  handleInputChange("openingScene", e.target.value)
                }
                onFocus={() => setFocusedField("openingScene")}
                onBlur={() => setFocusedField(null)}
                className={`${styles.sceneTextarea} ${
                  focusedField === "openingScene" ? styles.inputFocused : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className={styles.footer}>
        <button
          className={`${styles.submitButton} ${
            hoveredButton === "submit" ? styles.submitButtonHover : ""
          }`}
          onMouseEnter={() => setHoveredButton("submit")}
          onMouseLeave={() => setHoveredButton(null)}
        >
           Submit & Create
        </button>

        
      </div>
    </div>
  );
}
