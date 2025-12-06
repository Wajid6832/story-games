import React, { useState, useMemo } from "react";
import styles from "./ChatModals.module.css";

const GroupChatModal = ({ show, onClose, contacts = [], onCreate }) => {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState([]);

  const filtered = useMemo(() => {
    if (!q) return contacts;
    return contacts.filter((c) =>
      c.name.toLowerCase().includes(q.toLowerCase())
    );
  }, [q, contacts]);

  const handlePhoto = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setPhotoUrl(URL.createObjectURL(f));
  };

  const toggle = (c) => {
    setSelected((prev) =>
      prev.find((p) => p.name === c.name)
        ? prev.filter((p) => p.name !== c.name)
        : [...prev, c]
    );
  };

  const handleCreate = () => {
    if (!name.trim()) {
      alert("Please enter a group name");
      return;
    }
    const group = {
      id: Date.now(),
      name,
      description: desc,
      avatar: photoUrl || `https://i.pravatar.cc/150?u=group${Date.now()}`,
      members: selected,
      messages: [
        {
          from: "system",
          text: `Group "${name}" created`,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ],
    };
    onCreate(group);
    // reset
    setName("");
    setDesc("");
    setQ("");
    setSelected([]);
    setPhotoUrl(null);
    onClose();
  };

  if (!show) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modalLarge}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        <div className={styles.modalContentLarge}>
          <h3 className={styles.title}>Create Group</h3>

          <div className={styles.photoUploadWrap}>
            <label className={styles.photoLabel}>
              {photoUrl ? (
                <img src={photoUrl} alt="grp" className={styles.photoPreview} />
              ) : (
                <div className={styles.photoPlaceholder}>+</div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handlePhoto}
                style={{ display: "none" }}
              />
            </label>
            <div className={styles.photoText}>Upload Group Photo</div>
          </div>

          <div style={{ marginTop: 12 }}>
            <input
              className={styles.input}
              placeholder="Group name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ marginTop: 8 }}>
            <textarea
              className={styles.textarea}
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div style={{ marginTop: 10 }}>
            <input
              className={styles.input}
              placeholder="Search to add members"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          <div className={styles.selectedRow}>
            {selected.map((s) => (
              <div
                key={s.name}
                className={styles.smallAvatarWrap}
                onClick={() => toggle(s)}
              >
                <img
                  src={s.avatar || `https://i.pravatar.cc/60?u=${s.name}`}
                  alt={s.name}
                />
              </div>
            ))}
          </div>

          <div className={styles.dropdownList}>
            {filtered.map((fu) => (
              <div
                key={fu.name}
                className={styles.dropdownItem}
                onClick={() => toggle(fu)}
              >
                <img
                  src={fu.avatar || `https://i.pravatar.cc/60?u=${fu.name}`}
                  alt={fu.name}
                />
                <div className={styles.userName}>{fu.name}</div>
                <div
                  style={{
                    marginLeft: "auto",
                    color: selected.find((p) => p.name === fu.name)
                      ? "#0984e3"
                      : "#8b97a7",
                  }}
                >
                  {selected.find((p) => p.name === fu.name)
                    ? "Selected"
                    : "Add"}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginTop: 12,
            }}
          >
            <button className={styles.primaryBtn} onClick={handleCreate}>
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

export default GroupChatModal;


