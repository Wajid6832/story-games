import React, { useState } from "react";
import styles from "./ChatModals.module.css";

const NewChatModal = ({
  show,
  onClose,
  contacts = [],
  onCreateDirect,
  onOpenGroup,
}) => {
  const [q, setQ] = useState("");
  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(q.toLowerCase())
  );

  if (!show) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <div className={styles.modalContent}>
          <h3 className={styles.title}>Start a new chat</h3>

          <div style={{ margin: "10px 0" }}>
            <input
              className={styles.input}
              placeholder="Search contacts..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          <div className={styles.smallList}>
            {filtered.length ? (
              filtered.map((c) => (
                <div
                  key={c.name}
                  className={styles.smallListItem}
                  onClick={() => {
                    onCreateDirect(c);
                    onClose();
                  }}
                >
                  <img
                    src={c.avatar || `https://i.pravatar.cc/60?u=${c.name}`}
                    alt={c.name}
                    className={styles.smallAvatar}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <div style={{ fontWeight: 600 }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: "#7b8897" }}>
                      Start chat
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ padding: 12, color: "#8b97a7" }}>No results</div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginTop: 14,
            }}
          >
            <button
              className={styles.primaryBtn}
              onClick={() => {
                onOpenGroup();
              }}
            >
              Create Group
            </button>
            <button className={styles.ghostBtn} onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChatModal;


