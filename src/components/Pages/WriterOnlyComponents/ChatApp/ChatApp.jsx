import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  ListGroup,
  Dropdown,
} from "react-bootstrap";
import {
  BsArrowLeft,
  BsSearch,
  BsThreeDotsVertical,
  BsEmojiSmile,
  BsPaperclip,
  BsMic,
  BsSend,
  BsChevronLeft,
} from "react-icons/bs";
import styles from "./ChatApp.module.css";
import NewChatModal from "./NewChatModal";
import GroupChatModal from "./GroupChatModal"; 
import Picker from "emoji-picker-react";

/* --------------------------
 Helper: safe localStorage access
--------------------------- */
const loadJSON = (key, fallback) => {
  try {
    const s = localStorage.getItem(key);
    return s ? JSON.parse(s) : fallback;
  } catch {
    return fallback;
  }
};
const saveJSON = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
};

// Define the maximum number of avatars to display
const MAX_AVATARS_DISPLAY = 3; 

const ChatApp = () => {
  const [message, setMessage] = useState("");
  // Lazy initialize from localStorage to avoid overwrite race
  const [chats, setChats] = useState(() => loadJSON("chats", {}));
  const [groups, setGroups] = useState(() => loadJSON("groups", []));
  const [selected, setSelected] = useState(() => loadJSON("selected", null));

  // Placeholder for the current user's avatar/details
  const currentUser = {
    name: "Me", // Assuming 'Me' is the name of the current user for exclusion logic
    avatar: "https://i.pravatar.cc/40?u=current_user_me",
  };

  // mic helper
  const blobToBase64 = (blob, callback) => {
    const reader = new FileReader();
    reader.onloadend = () => callback(reader.result);
    reader.readAsDataURL(blob);
  };

  const base64ToBlob = (base64, type) => {
    const byteString = atob(base64.split(",")[1]);
    const array = [];
    for (let i = 0; i < byteString.length; i++) {
      array.push(byteString.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type });
  };

  const [showChat, setShowChat] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showGroupModal, setShowGroupModal] = useState(false); 

  const [searchTerm, setSearchTerm] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAddMembersDropdown, setShowAddMembersDropdown] = useState(false);

  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const fileInputRef = useRef();
  const chatBodyRef = useRef(null);
  const touchTimerRef = useRef(null);
  // Ref for the add members container 
  const addMembersRef = useRef(null); 
  // Ref for the emoji picker container
  const emojiPickerRef = useRef(null);

  const [audioBlobs, setAudioBlobs] = useState(() => {
    const saved = loadJSON("audioBlobs", {});
    const rebuilt = {};

    Object.keys(saved).forEach((id) => {
      const base64 = saved[id];
      const blob = base64ToBlob(base64, "audio/webm");
      const url = URL.createObjectURL(blob);
      rebuilt[id] = url;
    });

    return rebuilt;
  });

  const contacts = [
    {
      name: "Wajid Bhai",
      time: "10 hours",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Saqib bhai",
      time: "9 hours",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Hussain Bhai",
      time: "5 hours",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
      name: "Qammar Bhai",
      time: "8 hours",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
      name: "Zain",
      time: "12 hours",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
      name: "Sajjad Bhai",
      time: "3 days",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      name: "Khalil Bhai",
      time: "1 hour",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    {
      name: "Lewis Simmons",
      time: "10 hours",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Robert Fox",
      time: "3 days",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Wade Warren",
      time: "10 hours",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
      name: "Jenny Wilson",
      time: "10 hours",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
  ];

  // Persist changes to localStorage
  useEffect(() => {
    saveJSON("chats", chats);
  }, [chats]);
  useEffect(() => {
    saveJSON("groups", groups);
  }, [groups]);
  useEffect(() => {
    saveJSON("selected", selected);
  }, [selected]);
  
  // Effect for handling click outside the ADD MEMBERS dropdown
  useEffect(() => {
    const handleClickOutsideAddMembers = (event) => {
      if (addMembersRef.current && !addMembersRef.current.contains(event.target)) {
        if (showAddMembersDropdown) {
          setShowAddMembersDropdown(false);
        }
      }
    };

    if (showAddMembersDropdown) {
      document.addEventListener("mousedown", handleClickOutsideAddMembers);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideAddMembers);
    };
  }, [showAddMembersDropdown]);
  
  // Effect for handling click outside the EMOJI PICKER dropdown
  useEffect(() => {
    const handleClickOutsideEmoji = (event) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        if (showEmojiPicker) {
          setShowEmojiPicker(false);
        }
      }
    };

    if (showEmojiPicker) {
      document.addEventListener("mousedown", handleClickOutsideEmoji);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideEmoji);
    };
  }, [showEmojiPicker]);


  // Auto scroll to bottom when messages or selected change
  useEffect(() => {
    const key = selected ? keyFor(selected) : null;
    if (!key) return;
    const node = chatBodyRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [chats, selected]);

  useEffect(() => {
    // convert blob URLs back to base64 and store
    const entries = Object.entries(audioBlobs);

    const toSave = {};
    entries.forEach(([id, url]) => {
      fetch(url)
        .then((r) => r.blob())
        .then((blob) =>
          blobToBase64(blob, (base64) => {
            toSave[id] = base64;
            // NOTE: This can cause race conditions if too many recordings are saved quickly.
            // In a real app, use Promise.all or an IndexedDB approach.
            saveJSON("audioBlobs", toSave);
          })
        );
    });
  }, [audioBlobs]);

  // Helper: compute key for storing messages
  const keyFor = (item) =>
    item.type === "group" ? `group_${item.id}` : `user_${item.name}`;

  // Emoji picker
  const onEmojiClick = (emojiData, event) =>
    setMessage((prev) => prev + emojiData.emoji);

  // Attachment
  const handleFileClick = () => fileInputRef.current?.click();
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setMessage((prev) => prev + ` [File: ${file.name}]`);
  };

  // Microphone recording
  const handleMicClick = async () => {
    if (!recording) {
      try {
        setRecording(true);
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const mr = new MediaRecorder(stream);
        mediaRecorderRef.current = mr;
        audioChunksRef.current = [];
        mr.ondataavailable = (ev) => audioChunksRef.current.push(ev.data);
        mr.onstop = () => {
          const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });

          const id = `audio_${Date.now()}`;

          // Create an object URL immediately for playback
          const url = URL.createObjectURL(blob);
          setAudioBlobs((prev) => ({ ...prev, [id]: url }));

          // append voice id to message text
          setMessage((prev) => prev + `[VOICE:${id}]`);
          // stop tracks
          stream.getTracks().forEach((t) => t.stop());
        };
        mr.start();
      } catch (err) {
        console.error("mic error:", err);
        alert("Could not access microphone.");
        setRecording(false);
      }
    } else {
      setRecording(false);
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        mediaRecorderRef.current.stop();
      }
    }
  };

  // Add member to selected group
  const addMember = (contact) => {
    if (selected?.type !== "group") return;
    setGroups((prev) =>
      prev.map((g) =>
        g.id === selected.id
          ? {
              ...g,
              members: Array.isArray(g.members)
                ? g.members.some((m) => m.name === contact.name)
                  ? g.members
                  : [...g.members, contact]
                : [contact],
            }
          : g
      )
    );
    setSelected((prev) => {
      const members = prev.members || [];
      if (members.some((m) => m.name === contact.name)) return prev;
      return { ...prev, members: [...members, contact] };
    });
    setShowAddMembersDropdown(false);
  };

  // create or open direct chat
  const handleContactClick = (c) => {
    const user = {
      type: "user",
      name: c.name,
      avatar: c.avatar,
      key: `user_${c.name}`,
    };
    setSelected(user);
    setShowChat(true);

    const k = keyFor(user);
    if (!chats[k]) {
      setChats((prev) => ({
        ...prev,
        [k]: [
          {
            from: "them",
            text: `Assalam-u-alaikum! This is ${c.name}. How are you?`,
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      }));
    }
  };

  const handleCreateDirect = (c) => handleContactClick(c);

  // create group (from modal)
  const handleCreateGroup = (group) => {
    // ensure group has key field and id
    const newGroup = { ...group, key: `group_${group.id}` };
    setGroups((prev) => [newGroup, ...prev]);
    setChats((prev) => ({
      ...prev,
      [`group_${group.id}`]: group.messages || [],
    }));
    setSelected({
      type: "group",
      id: group.id,
      name: group.name,
      avatar: group.avatar,
      members: group.members || [],
      key: `group_${group.id}`,
    });
    setShowChat(true);
  };

  // send message
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim() || !selected) return;

    const k = keyFor(selected);
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    // For 'me' messages in a group, we can optionally attach the user's name/avatar here too
    const newMsg = { from: "me", text: message.trim(), time, senderName: currentUser.name, senderAvatar: currentUser.avatar };

    setChats((prev) => {
      const updated = { ...prev, [k]: [...(prev[k] || []), newMsg] };
      return updated;
    });

    setMessage("");
    setSelected((prev) => ({ ...prev })); // keep object reference updated

    // bot reply simulation
    setTimeout(async () => {
      const reply = await getRandomReply();
      
      const replyMsg = {
        from: "them",
        text: reply,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      
      // If it's a group chat, identify the specific sender (avatar and name)
      if (selected.type === "group" && selected.members && selected.members.length > 0) {
        // Filter out the current user ('Me') for reply simulation
        const possibleSenders = selected.members.filter(m => m.name !== currentUser.name); 
        
        if (possibleSenders.length > 0) {
            const sender = possibleSenders[Math.floor(Math.random() * possibleSenders.length)];
            replyMsg.senderName = sender.name; // Add sender name for display
            replyMsg.senderAvatar = sender.avatar; // Add sender avatar
        } else {
             // Fallback if only 'Me' is left in the group, though this shouldn't happen in real use
             replyMsg.senderName = selected.name;
             replyMsg.senderAvatar = selected.avatar;
        }
      }

      setChats((prev) => ({ ...prev, [k]: [...(prev[k] || []), replyMsg] }));
    }, 600);
  };

  const clearChat = (item) => {
    const k = keyFor(item);
    setChats((prev) => ({ ...prev, [k]: [] }));
  };
  const deleteChat = (item) => {
    const k = keyFor(item);
    setChats((prev) => {
      const u = { ...prev };
      delete u[k];
      return u;
    });
    if (item.type === "group")
      setGroups((prev) => prev.filter((g) => g.id !== item.id));
    if (selected && keyFor(selected) === k) {
      setSelected(null);
      setShowChat(false);
    }
  };

  const deleteMessage = (item, idx) => {
    const k = keyFor(item);
    setChats((prev) => {
      const copy = { ...prev };
      if (copy[k]) copy[k] = copy[k].filter((_, i) => i !== idx);
      return copy;
    });
  };

  const handleTouchStart = (e, index) => {
    touchTimerRef.current = setTimeout(() => {
      if (window.confirm("Delete this message?"))
        deleteMessage(selected, index);
    }, 800);
  };
  const handleTouchEnd = () => {
    if (touchTimerRef.current) {
      clearTimeout(touchTimerRef.current);
      touchTimerRef.current = null;
    }
  };

  const deleteMessageForEveryone = (group, msgIndex) => {
    if (group.type !== "group") return;
    const k = keyFor(group);
    setChats((prev) => {
      const updated = { ...prev };
      if (updated[k] && updated[k][msgIndex]) {
        updated[k][msgIndex] = {
          text: "This message was deleted",
          from: "system",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
      }
      return updated;
    });
  };

  const getRandomReply = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      return data.content;
    } catch {
      const fallback = [
        "Nice!",
        "Okay",
        "Tell me more",
        "Great!",
        "Interesting 😃",
      ];
      return fallback[Math.floor(Math.random() * fallback.length)];
    }
  };

  // Helper function to get group members (safely defaulting to empty array)
  const getGroupMembers = () => selected?.members || [];
  
  // Calculate members to show and remaining count
  const allMembers = getGroupMembers();
  const membersToShow = allMembers.slice(0, MAX_AVATARS_DISPLAY);
  const remainingCount = allMembers.length - MAX_AVATARS_DISPLAY;


  return (
    <Container fluid className={styles.chatContainer}>
      <NewChatModal
        show={showNew}
        onClose={() => setShowNew(false)}
        contacts={contacts}
        onCreateDirect={handleCreateDirect}
        onOpenGroup={() => {
          setShowNew(false);
          setShowGroupModal(true);
        }}
      />
      <GroupChatModal
        show={showGroupModal}
        onClose={() => setShowGroupModal(false)}
        contacts={contacts}
        onCreate={handleCreateGroup}
      />

      <header className={styles.topHeader}>
        <div className={styles.heading}>
          <div className={styles.icon}>
            <BsChevronLeft />
          </div>
          <h5 className={styles.headerTitle}>ChatBox</h5>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button
            className={`${styles.newChatBtn} d-none d-md-inline-block btn-lg`}
            onClick={() => setShowNew(true)}
          >
            New Chat
          </Button>
          <Button
            className={`${styles.newChatBtn} d-inline-block d-md-none btn-sm`}
            onClick={() => setShowNew(true)}
          >
            New Chat
          </Button>
        </div>
      </header>

      <Row className="g-0 flex-column flex-md-row" style={{ height: "90vh" }}>
        <Col
          md={3}
          className={`${styles.sidebar} border-end ${
            showChat ? "d-none d-md-flex" : "d-flex"
          } flex-column`}
        >
          <InputGroup className={`mb-3 px-3 ${styles.searchBox}`}>
            <InputGroup.Text>
              <BsSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="Enter Name to Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>

          {groups.length > 0 && (
            <div style={{ padding: 8 }}>
              <div
                style={{
                  fontSize: 12,
                  color: "#7b8897",
                  marginBottom: 6,
                  fontWeight: 600,
                }}
              >
                Groups
              </div>
              <ListGroup variant="flush" className={styles.contactList}>
                {groups
                  .filter((g) =>
                    g.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((g) => (
                    <ListGroup.Item
                      key={g.id}
                      className={`${styles.contactItem} ${
                        selected?.type === "group" && selected.id === g.id
                          ? styles.activeContact
                          : ""
                      }`}
                      onClick={() => {
                        setSelected({
                          type: "group",
                          id: g.id,
                          name: g.name,
                          avatar: g.avatar,
                          members: g.members || [],
                          key: `group_${g.id}`,
                        });
                        setShowChat(true);
                      }}
                    >
                      {/* SIDEBAR GROUP AVATAR (Single) */}
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          src={g.avatar}
                          alt={g.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className={styles.contactMeta}>
                        <div className={styles.contactName}>{g.name}</div>
                        <div className={styles.contactPreview}>
                          {chats[`group_${g.id}`]?.slice(-1)[0]?.text ||
                            g.description}
                        </div>
                      </div>
                      <div className={styles.contactTime}>Group</div>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </div>
          )}

          <ListGroup variant="flush" className={styles.contactList}>
            {contacts
              .filter((c) =>
                c.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((c, i) => (
                <ListGroup.Item
                  key={i}
                  className={`${styles.contactItem} ${
                    selected?.type === "user" && selected.name === c.name
                      ? styles.activeContact
                      : ""
                  }`}
                  onClick={() => handleContactClick(c)}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      overflow: "hidden",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src={c.avatar}
                      alt={c.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className={styles.contactMeta}>
                    <div className={styles.contactName}>{c.name}</div>
                    <div className={styles.contactPreview}>
                      {chats[`user_${c.name}`]?.slice(-1)[0]?.text ||
                        "Chat preview..."}
                    </div>
                  </div>
                  <div className={styles.contactTime}>{c.time}</div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>

        <Col
          md={9}
          className={`${styles.chatArea} ${
            showChat ? "d-flex" : "d-none d-md-flex"
          } flex-column`}
        >
          {!selected ? (
            <div className={styles.noChatSelected}>
              <h4>Select a contact to start chatting</h4>
            </div>
          ) : (
            <>
              {/* === CHAT HEADER START === */}
              <div className={styles.chatHeaderBar}>
                {/* 1. LEFT SECTION (Back Button, Name/Status/Member Count) */}
                <div className={styles.leftHeader}>
                  <Button
                    variant="light"
                    className="me-2 d-md-none"
                    onClick={() => setShowChat(false)}
                    aria-label="Back to chat list"
                  >
                    <BsArrowLeft />
                  </Button>
                  
                  {/* --- Content for Direct Chat OR Group Chat (Left Side) --- */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>

                    {/* Avatar (ONLY for Direct Chat, Hidden for Group Chat) */}
                    {selected.type !== "group" && (
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          src={selected.avatar}
                          alt={selected.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    )}

                    {/* Name/Status/Member Count */}
                    <div>
                      <div className={styles.groupTitle}>{selected.name}</div>
                      <div style={{ fontSize: 12, color: "#7b8897" }}>
                        {selected.type === "group"
                          ? `${allMembers.length || 0} members` // Group detail (Left)
                          : "Online" // Direct chat detail
                        }
                      </div>
                    </div>
                  </div>
                  
                </div>

                {/* 2. CENTER SECTION (Group Avatars + Plus Badge ONLY - Centered) */}
                {selected.type === "group" && (
                    <div style={{ 
                        // Ensures centering and takes up available space
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        flex: 1 
                    }}>
                      {/* Horizontal STACKED Avatars (Centered) - Limited to 3 */}
                      <div
                        style={{
                          display: "flex", 
                          alignItems: "center",
                          justifyContent: "center",
                          height: 48, 
                          // MODIFIED STYLES FOR STACKING 
                          gap: '-10px', 
                        }}
                      >
                        {/* Avatars limited by MAX_AVATARS_DISPLAY (now 3) */}
                        {membersToShow.map((member, idx) => (
                            <img
                              key={member.name}
                              src={member.avatar}
                              alt={member.name}
                              style={{
                                width: 32,
                                height: 32,
                                borderRadius: "50%",
                                border: "2px solid white",
                                objectFit: "cover",
                                // POSITIONING FOR STACKING 
                                position: 'relative',
                                zIndex: MAX_AVATARS_DISPLAY - idx, 
                              }}
                            />
                        ))}

                        {/* PLUS BADGE: Shown if total members > 3 */}
                        {remainingCount > 0 && (
                            <div
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: "50%",
                                    backgroundColor: '#007bff', 
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    border: "2px solid white",
                                    position: 'relative',
                                    zIndex: 0, 
                                }}
                            >
                                +{remainingCount}
                            </div>
                        )}
                      </div>
                    </div>
                )}

                {/* 3. RIGHT SECTION (Add Member Input & Options Dropdown) */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  {selected.type === "group" && (
                    <div
                      className={styles.addMemberInput}
                      style={{ position: "relative" }}
                      // Attach the ref to the container 
                      ref={addMembersRef}
                    >
                      <Form.Control
                        placeholder="Add members..."
                        readOnly
                        onClick={() =>
                          setShowAddMembersDropdown((prev) => !prev)
                        }
                      />
                      {showAddMembersDropdown && (
                        <div
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            width: "100%",
                            maxHeight: 200,
                            overflowY: "auto",
                            border: "1px solid #ddd",
                            background: "#fff",
                            zIndex: 1000,
                            borderRadius: 4,
                          }}
                        >
                          {contacts.map((c) => (
                            <div
                              key={c.name}
                              style={{
                                padding: "8px 12px",
                                cursor: "pointer",
                                borderBottom: "1px solid #eee",
                                // Use Flexbox to align avatar and name 
                                display: 'flex', 
                                alignItems: 'center',
                                gap: '10px',
                              }}
                              onClick={() => {
                                addMember(c);
                                setShowAddMembersDropdown(false);
                              }}
                            >
                                {/* Contact Avatar */}
                                <img
                                    src={c.avatar}
                                    alt={c.name}
                                    style={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                    }}
                                />
                              {c.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <Dropdown align="end">
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-three-dots"
                      className={styles.dotsBtn}
                      aria-label="Chat options"
                    >
                      <BsThreeDotsVertical />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        className="text-primary"
                        onClick={() => clearChat(selected)}
                      >
                        Clear Chat
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="text-danger"
                        onClick={() => deleteChat(selected)}
                      >
                        Delete Chat
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              {/* === CHAT HEADER END === */}
              <hr style={{ margin: 0, padding: 0 }} />

              <div className={styles.chatBody} ref={chatBodyRef}>
                {(chats[keyFor(selected)] || []).map((m, i) => {
                  const voiceMatch = m.text.match(/\[VOICE:([^\]]+)\]/);
                  const isVoice = voiceMatch !== null;
                  const audioId = voiceMatch ? voiceMatch[1] : null;
                  const audioUrl = audioId ? audioBlobs[audioId] : null;

                  // Determine which avatar to display
                  let avatarSrc = selected.avatar; // Default to the chat's general avatar
                  if (m.from === "me") {
                    avatarSrc = currentUser.avatar; // Use current user's avatar
                  } else if (selected.type === "group" && m.senderAvatar) {
                    avatarSrc = m.senderAvatar; // Use specific sender's avatar in group
                  } else {
                    avatarSrc = selected.avatar; // Use direct chat or group fallback
                  }

                  return (
                    <div
                      key={i}
                      className={`${styles.messageRow} ${
                        m.from === "me" ? styles.messageMe : styles.messageThem
                      }`}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        if (window.confirm("Delete this message?"))
                          deleteMessage(selected, i);
                      }}
                      onTouchStart={(e) => handleTouchStart(e, i)}
                      onTouchEnd={handleTouchEnd}
                    >
                      <div className={styles.msgAvatar}>
                        <img
                          src={avatarSrc}
                          alt="avatar"
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      <div
                        className={`${styles.msgBubble} ${
                          m.from === "system" ? styles.deletedMessage : ""
                        }`}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            width: "100%",
                          }}
                        >
                          {/* Display Sender Name in Group Chat */}
                          {selected.type === "group" && m.senderName && m.from !== "me" && (
                            <div style={{ fontWeight: 'bold', fontSize: 12, color: '#007bff' }}>
                              {m.senderName}
                            </div>
                          )}
                          
                          {isVoice && audioUrl ? (
                            <div style={{ width: "100%" }}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 8,
                                  marginBottom: 4,
                                }}
                              >
                                <span style={{ fontSize: 14 }}>
                                  🎤 Voice Message
                                </span>
                              </div>
                              <audio
                                controls
                                src={audioUrl}
                                style={{
                                  width: "100%",
                                  maxWidth: 300,
                                  height: 32,
                                }}
                              >
                                Your browser does not support audio element.
                              </audio>
                            </div>
                          ) : (
                            <span>{m.text}</span>
                          )}

                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div className={styles.msgTime}>{m.time}</div>

                            {selected.type === "group" &&
                              m.from === "me" &&
                              m.from !== "system" && (
                                <Dropdown>
                                  <Dropdown.Toggle
                                    as={Button}
                                    variant="link"
                                    size="sm"
                                    style={{ padding: 0, color: "#ff4d4f" }}
                                    aria-label="Message options"
                                  >
                                    ⋮
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item
                                      onClick={() => deleteMessage(selected, i)}
                                    >
                                      Delete for Me
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      onClick={() =>
                                        deleteMessageForEveryone(selected, i)
                                      }
                                    >
                                      Delete for Everyone
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              )}

                            {selected.type !== "group" &&
                              m.from !== "system" && (
                                <Button
                                  variant="link"
                                  size="sm"
                                  onClick={() => deleteMessage(selected, i)}
                                  style={{
                                    padding: 0,
                                    marginLeft: 8,
                                    color: "#ff4d4f",
                                  }}
                                  aria-label="Delete message"
                                >
                                  ×
                                </Button>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Form onSubmit={sendMessage} className={styles.chatComposer}>
                <div className={styles.composerInner}>
                  {/* FIX APPLIED: ADDED FLEXBOX STYLES TO ALIGN BUTTONS HORIZONTALLY */}
                  <div className={styles.composerLeft} style={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                      type="button"
                      variant="link"
                      onClick={handleFileClick}
                      aria-label="Attach file"
                    >
                      <BsPaperclip />
                    </Button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    {/* WRAPPED EMOJI BUTTON AND PICKER WITH REF */}
                    <div ref={emojiPickerRef} style={{ position: 'relative' }}> 
                      <Button
                        type="button"
                        variant="link"
                        onClick={() => setShowEmojiPicker((p) => !p)}
                        aria-label="Add emoji"
                      >
                        <BsEmojiSmile />
                      </Button>
                      {showEmojiPicker && (
                        <div className={styles.emojiPicker}>
                          <Picker onEmojiClick={onEmojiClick} />
                        </div>
                      )}
                    </div>
                  </div>

                  <Form.Control
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className={styles.messageInput}
                  />

                  <div className={styles.composerRight}>
                    <Button
                      variant="link"
                      onClick={handleMicClick}
                      aria-label={
                        recording ? "Stop recording" : "Record voice message"
                      }
                    >
                      <BsMic color={recording ? "red" : "black"} />
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      className={styles.sendBtn}
                      aria-label="Send message"
                    >
                      <BsSend />
                    </Button>
                  </div>
                </div>
              </Form>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ChatApp;



