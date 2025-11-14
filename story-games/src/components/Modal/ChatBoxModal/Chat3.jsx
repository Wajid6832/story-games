import { useState } from "react";
import { Button, Form, ListGroup, InputGroup } from "react-bootstrap";
import { BsPencil, BsImage, BsSearch, BsCheckCircle } from "react-icons/bs";
import styles from "./Chat3.module.css";
import sampleImage from "../../../assets/ChatImage.png";

const NewGroupChat = ({ onHide, contacts, setContacts }) => {
  const [groupPhoto, setGroupPhoto] = useState(null);
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);


  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setGroupPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const toggleMemberSelection = (member) => {
    setSelectedMembers((prev) =>
      prev.includes(member)
        ? prev.filter((m) => m !== member)
        : [...prev, member]
    );
  };

  const handleCreateGroup = () => {
    if (!groupName.trim()) {
      alert("Please enter a group name!");
      return;
    }

    const newGroup = {
      name: groupName.trim(),
      description: groupDescription.trim(),
      time: "Just now",
      avatar: groupPhoto || "G",
      members: selectedMembers,
      isGroup: true,
    };

    setContacts((prev) => [newGroup, ...prev]);

    alert(`Group "${groupName}" created successfully!`);
    onHide();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onHide}>
          &times;
        </button>

        <img
          src={sampleImage}
          alt="Group Chat"
          className={styles.smallImg}
        />

        <h5 className="text-center mb-3">Create Group Chat</h5>

        <div className="text-center mb-3">
          <Form.Group controlId="formFile" className="mb-2">
            <div className={styles.roundUpload}>
              <Form.Control
                type="file"
                accept="image/*"
                className={styles.hiddenInput}
                id="formFile"
                onChange={handlePhotoUpload}
              />
              <label htmlFor="formFile" className={styles.uploadCircle}>
                {groupPhoto ? (
                  <img
                    src={groupPhoto}
                    alt="Group"
                    className={styles.previewImage}
                  />
                ) : (
                  <BsImage className={styles.imageIcon} />
                )}
              </label>
            </div>
            <Form.Label className={styles.uploadLabel}>
              Upload Group Photo
            </Form.Label>
          </Form.Group>
        </div>

        <InputGroup className={`${styles.inputGroupCustom} mb-3`}>
          <InputGroup.Text>
            <BsPencil />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </InputGroup>

        <InputGroup className={`${styles.inputGroupCustom} mb-3`}>
          <InputGroup.Text>
            <BsPencil />
          </InputGroup.Text>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Enter group description"
            value={groupDescription}
            onChange={(e) => setGroupDescription(e.target.value)}
          />
        </InputGroup>

        <InputGroup className={`${styles.searchContainer} mb-3`}>
          <InputGroup.Text>
            <BsSearch />
          </InputGroup.Text>
          <Form.Control
            type="search"
            placeholder="Search users to add"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>

        {searchTerm && (
          <ListGroup className={`${styles.contactList} mb-3`}>
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact, i) => (
                <ListGroup.Item
                  key={i}
                  action
                  onClick={() => toggleMemberSelection(contact.name)}
                  className={`d-flex justify-content-between align-items-center ${
                    selectedMembers.includes(contact.name)
                      ? styles.selectedContact
                      : ""
                  }`}
                >
                  {contact.name}
                  {selectedMembers.includes(contact.name) && (
                    <BsCheckCircle className="text-success" />
                  )}
                </ListGroup.Item>
              ))
            ) : (
              <div className="text-center text-muted py-2">
                No contacts found
              </div>
            )}
          </ListGroup>
        )}

        <div className="text-center">
          <Button
            variant="primary"
            className={styles.createBtn}
            onClick={handleCreateGroup}
          >
            Create Group
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewGroupChat;
