import { useState } from "react";
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
import image from "../../../../assets/ChatImage.png"
import styles from "../ChatApp/ChatApp.module.css";



import ChatModal from "../../../Modal/ChatBoxModal/Chat1";
import NewChatModal from "../../../Modal/ChatBoxModal/Chat2";
import NewGroupChat from "../../../Modal/ChatBoxModal/Chat3";




const ChatApp = () => {
  const [searchTerm, setSearchTerm] = useState("");


  const [openChatModal, setOpenChatModal] = useState(false);
  const [openNewChatModal, setOpenNewChatModal] = useState(false);
  const [openGroupChatModal, setOpenGroupChatModal] = useState(false);



  const [message, setMessage] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [chats, setChats] = useState({});

  const [contacts, setContacts] = useState([
    { name: "Wajid Bhai", time: "10 hours", avatar: "WB" },
    { name: "Saqib bhai", time: "9 hours", avatar: "SB" },
    { name: "Hussain Bhai", time: "5 hours", avatar: "HB" },
    { name: "Qammar Bhai", time: "8 hours", avatar: "QB" },
    { name: "Zain", time: "12 hours", avatar: "Z" },
    { name: "Jerome Bell", time: "3 days", avatar: "JB" },
    { name: "Brooklyn Simmons", time: "1 hour", avatar: "BS" },
    { name: "Lewis Simmons", time: "10 hours", avatar: "LS" },
    { name: "Robert Fox", time: "3 days", avatar: "RF" },
    { name: "Wade Warren", time: "10 hours", avatar: "WW" },
    { name: "Jenny Wilson", time: "10 hours", avatar: "JW" },
  ]);
  
const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(searchTerm.toLowerCase())
);





  const members = [
    "Jane Cooper",
    "Wade Warren",
    "Brooklyn Simmons",
    "Jenny Wilson",
    "Devon Lane",
    "Marvin McKinney",
  ];
  
  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    if (!chats[contact.name]) {
      setChats((prev) => ({
        ...prev,
        [contact.name]: [
          {
            from: "them",
            text: `Hey! This is ${contact.name}. How are you?`,
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      }));
    }
  };
  


const handleClearChat = () => {
  if (!selectedContact) return;

  const confirmClear = window.confirm(
    `Are you sure you want to clear the chat with ${selectedContact.name}?`
  );

  // Only clear if user clicked "OK"
  if (confirmClear) {
    setChats((prevChats) => ({
      ...prevChats,
      [selectedContact.name]: [],
    }));
  }
};




  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim() || !selectedContact) return;

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  
    const updatedMessages = [
      ...(chats[selectedContact.name] || []),
      { from: "me", text: message, time },
    ];

    setChats((prev) => ({ ...prev, [selectedContact.name]: updatedMessages }));
    setMessage("");

    setTimeout(async () => {
      // const reply = await getRandomReply();
      const reply = await getAIReply(message);

      const botMessages = [
        ...updatedMessages,
        {
          from: "them",
          text: reply,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ];
      setChats((prev) => ({ ...prev, [selectedContact.name]: botMessages }));
    }, 500);
  };

const getAIReply = async (userMessage) => {
  try {
     if (!selectedContact) return "Select a contact first.";
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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", // ⚠️ For testing only
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // "model": "deepseek/deepseek-r1:free",
        model: "deepseek/deepseek-r1-distill-llama-70b:free",
        messages: [
          {
            role: "system",
            content: `You are chatting with ${selectedContact.name}.
      You should reply like ${selectedContact.name} would.
      Use the same language, tone, and style that ${selectedContact.name} uses.
      Keep your replies natural, casual, and in the way they would normally talk.`
          },
          {
            role: "user",
            content: userMessage
          }
        ]
      })
    });

    const data = await res.json();

    console.log("AI response:", data);

    return data?.choices?.[0]?.message?.content || "Sorry, I didn’t understand that 😅";
  } catch (error) {
    console.error("DeepSeek API error:", error);
    return "Oops! I’m having trouble replying right now 😞";
  }
};







  const [showChat, setShowChat] = useState(false);
  return (
    <>
    <Container fluid className={styles.chatContainer}>
      <header className={styles.topHeader}>
        <div className={styles.heading}>
          <div className={styles.icon}>
            <BsChevronLeft />
          </div>
          <h5 className={styles.headerTitle}>ChatBox</h5>
        </div>
        <>
          <Button className={`${styles.newChatBtn} d-none d-md-inline-block btn-lg`} 
          onClick={() => setOpenChatModal(true)}>
            New Chat
          </Button>

          <Button className={`${styles.newChatBtn} d-inline-block d-md-none btn-sm`}
          onClick={() => setOpenChatModal(true)}>
            New Chat
          </Button>
        </>
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
              type="search"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>

          <ListGroup variant="flush" className={styles.contactList}>
            {filteredContacts.map((c, i) => (

              <ListGroup.Item
                key={i}
                className={`${styles.contactItem} ${
                  selectedContact?.name === c.name ? styles.activeContact : ""
                }`}
                onClick={() => {
                  handleContactClick(c);
                  setShowChat(true); 
                }}
              >
                <div className={styles.avatar}>{c.avatar}</div>
                <div className={styles.contactMeta}>
                  <div className={styles.contactName}>{c.name}</div>
                  <div className={styles.contactPreview}>Chat preview...</div>
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
          {!selectedContact ? (
            <div className={styles.noChatSelected}>
              <img className={styles.chatBg} src={image} alt="" />
              <h4>Select a contact to start chatting</h4>
            </div>
          ) : (
            <>
              <div className={styles.chatHeaderBar}>
                <div className={styles.leftHeader}>
                  <Button
                    variant="light"
                    className="me-2 d-md-none"
                    onClick={() => setShowChat(false)}
                  >
                    <BsArrowLeft />
                  </Button>
                  <div className={styles.groupTitle}>
                    {selectedContact.name}
                  </div>
                </div>


                <Dropdown align="center" className=
                  {`${styles.addMemberInput} d-none d-lg-block`}>
                <Dropdown.Toggle
                  as={Form.Control}
                  placeholder="Add members..."
                  className={styles.messageInputDropdown}
                />
                <Dropdown.Menu>
                  {members.map((m, i) => (
                    <Dropdown.Item key={i}>{m}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>




                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-three-dots"
                    className={styles.dotsBtn}
                  >
                    <BsThreeDotsVertical />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="text-primary bg-white" onClick={handleClearChat}>
                      Clear Chat
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              
              <div className={styles.chatBody}>
                {(chats[selectedContact.name] || []).map((m, i) => (
                  <div
                    key={i}
                    className={`${styles.messageRow} ${
                      m.from === "me" ? styles.messageMe : styles.messageThem
                    }`}
                  >
                    <div className={styles.msgAvatar}>
                      {m.from === "me" ? "ME" : selectedContact.avatar}
                    </div>
                    <div className={styles.msgBubble}>
                      <div>{m.text}</div>
                      <div className={styles.msgTime}>{m.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              
              <Form onSubmit={sendMessage} className={styles.chatComposer}>
                <div className={styles.composerInner}>
                  <div className={styles.composerLeft}>
                    <Button variant="link">
                      <BsEmojiSmile />
                    </Button>
                    <Button variant="link">
                      <BsPaperclip />
                    </Button>
                  </div>
                  


                  <Form.Control
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className={styles.messageInput}
                  />

                  <div className={styles.composerRight}>
                    <Button variant="link">
                      <BsMic />
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      className={styles.sendBtn}
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





      
      {openChatModal && (
        <ChatModal
          onHide={() => setOpenChatModal(false)}
          openNewChat={() => {
            setOpenChatModal(false);
            setOpenNewChatModal(true);
          }}
          openGroupChat={() => {
            setOpenChatModal(false);
            setOpenGroupChatModal(true);
          }}
        />
      )}

      
{openNewChatModal && (
  <NewChatModal
    onHide={() => setOpenNewChatModal(false)}
    contacts={contacts}
    setContacts={setContacts}
    onSelectContact={(contact) => {
      setSelectedContact(contact);
      setShowChat(true);
      setOpenNewChatModal(false);
    }}
  />
)}


      {openGroupChatModal && (
  <NewGroupChat
    onHide={() => setOpenGroupChatModal(false)}
    contacts={contacts}
    setContacts={setContacts}
  />
)}

      </>
  );
};

export default ChatApp;








































