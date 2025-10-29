
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button, ListGroup, Dropdown, Badge } from 'react-bootstrap';
import { BsArrowLeft, BsSearch, BsThreeDotsVertical, BsEmojiSmile, BsPaperclip, BsMic, BsSend } from 'react-icons/bs';
import styles from '../../Module/ChatApp.module.css';

const ChatApp = () => {
  const [message, setMessage] = useState('');

  const contacts = [
    { name: 'Jerome Bell', time: '3 days', avatar: 'JB' },
    { name: 'Brooklyn Simmons', time: '1 hour', avatar: 'BS' },
    { name: 'Lewis Simmons', time: '10 hours', avatar: 'LS' },
    { name: 'Robert Fox', time: '3 days', avatar: 'RF' },
    { name: 'Wade Warren', time: '10 hours', avatar: 'WW' },
    { name: 'Jenny Wilson', time: '10 hours', avatar: 'JW' },
    { name: 'Amelia Edwards', time: '10 hours', avatar: 'AE' },
    { name: 'Arlene McCoy', time: '10 hours', avatar: 'AM' },
  ];

  const messages = [
    { from: 'them', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh...', time: '4:02 PM' },
    { from: 'me', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam. 🙂', time: '4:02 PM' },
    { from: 'me', text: ' ', type: 'image', time: '4:02 PM' },
  ];

  const members = ['Jane Cooper', 'Wade Warren', 'Brooklyn Simmons', 'Jenny Wilson', 'Devon Lane', 'Marvin McKinney'];

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    console.log('send', message);
    setMessage('');
  };

  return (
    <Container fluid className={styles.chatContainer}>
      <Row className="g-0">
        <Col md={3} className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <h4 className="m-0">Chat</h4>
          </div>

          <InputGroup className={`mb-3 px-3 ${styles.searchBox}`}>
            <InputGroup.Text><BsSearch /></InputGroup.Text>
            <Form.Control placeholder="Enter Name to Search" />
          </InputGroup>

          <ListGroup variant="flush" className={styles.contactList}>
            {contacts.map((c, i) => (
              <ListGroup.Item key={i} className={styles.contactItem}>
                <div className={styles.avatar}>{c.avatar}</div>
                <div className={styles.contactMeta}>
                  <div className={styles.contactName}>{c.name}</div>
                  <div className={styles.contactPreview}>Lorem ipsum dolor sit...</div>
                </div>
                <div className={styles.contactTime}>{c.time}</div>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className={styles.sidebarFooter}></div>
        </Col>

        {/* Chat Area */}
        <Col md={9} className={styles.chatArea}>
          <div className={styles.chatHeaderBar}>
            <div className={styles.leftHeader}>
              <Button variant="light" className="me-2"><BsArrowLeft /></Button>
              <div className={styles.groupTitle}>Group Chat Name</div>
              <div className={styles.memberAvatars}>
                {members.slice(0,3).map((m, idx) => (
                  <div key={idx} className={styles.smallAvatar}>{m.split(' ').map(s=>s[0]).join('')}</div>
                ))}
                <Badge bg="light" text="dark" className={styles.addBadge}>+</Badge>
              </div>
            </div>

            <div className={styles.rightHeader}>
              <InputGroup className={styles.addMemberInput}>
                <Form.Control placeholder="Add members..." />
                <Dropdown align="end">
                  <Dropdown.Toggle variant="light" id="dropdown-basic" className={styles.dotsBtn}>
                    <BsThreeDotsVertical />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {members.map((m, i) => <Dropdown.Item key={i}>{m}</Dropdown.Item>)}
                  </Dropdown.Menu>
                </Dropdown>
              </InputGroup>
            </div>
          </div>

          <div className={styles.chatBody}>
            {messages.map((m, i) => (
              <div key={i} className={`${styles.messageRow} ${m.from === 'me' ? styles.messageMe : styles.messageThem}`}>
                <div className={styles.msgAvatar}>{m.from === 'me' ? 'ME' : 'TH'}</div>
                <div className={styles.msgBubble}>
                  {m.type === 'image' ? (
                    <div className={styles.imagePlaceholder}>Image</div>
                  ) : (
                    <div>{m.text}</div>
                  )}
                  <div className={styles.msgTime}>{m.time}</div>
                </div>
              </div>
            ))}
          </div>

          <Form onSubmit={sendMessage} className={styles.chatComposer}>
            <div className={styles.composerInner}>
              <div className={styles.composerLeft}>
                <Button variant="link"><BsEmojiSmile /></Button>
                <Button variant="link"><BsPaperclip /></Button>
              </div>

              <Form.Control
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className={styles.messageInput}
              />

              <div className={styles.composerRight}>
                <Button variant="link"><BsMic /></Button>
                <Button type="submit" variant="primary" className={styles.sendBtn}><BsSend /></Button>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatApp;

