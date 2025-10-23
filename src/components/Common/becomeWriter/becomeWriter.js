import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Collapse } from "react-bootstrap"; 
import Sidebar from "../ReaderSidebar/Sidebar"; 
import styles from "./BecomeWriter.module.css"; 

const characterData = [
  "Character 1 Name", "Character 2 Name", "Character 3 Name", "Character 4 Name"
];

const FileUploadBox = ({ onFileChange }) => {
    const [dragActive, setDragActive] = useState(false);
    const inputRef = React.useRef(null);
    const [fileName, setFileName] = useState(null);

    const handleDrag = (e) => {
      e.preventDefault(); e.stopPropagation();
      setDragActive(e.type === "dragenter" || e.type === "dragover");
    };

    const handleDrop = (e) => {
      e.preventDefault(); e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        onFileChange(e.dataTransfer.files);
        setFileName(e.dataTransfer.files[0].name);
      }
    };

    const handleChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        onFileChange(e.target.files);
        setFileName(e.target.files[0].name);
      }
    };
    
    const onButtonClick = () => { inputRef.current.click(); };
    
    const uploadClasses = `${styles.fileUploadBox} ${dragActive ? styles.dragActive : ''} mb-3`;
    
    return (
      <div 
          className={uploadClasses}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={onButtonClick}
      >
        <input 
            ref={inputRef} 
            type="file" 
            onChange={handleChange} 
            multiple={false}
            style={{ display: 'none' }} 
        />
        <div className={`d-flex flex-column align-items-center ${styles.uploadIconText}`}>
          <i className="bi bi-cloud-upload fs-3 mb-2"></i>
          <span>{fileName ? `File Selected: ${fileName}` : "Upload Sample Work"}</span>
        </div>
      </div>
    );
};


const CharacterCard = ({ name, isSelected, isExpanded, onClick, onExpand, onApply }) => {
  
  const cardClasses = `${styles.characterCard} shadow-sm ${isSelected ? styles.isSelected : ''}`;

  const handleInfoToggle = (e) => {
      e.preventDefault();
      e.stopPropagation(); 
      
      onClick(name);
      
      onExpand(isExpanded ? null : name); 
  }

  const handleApplyClick = () => {
    onClick(name);
    onApply();
  }
  
  return (
    <Card className={cardClasses}>
      <div className={styles.cardHeaderBody}>
        <Card.Subtitle className="mb-1 text-muted small">Book Name</Card.Subtitle>
        <Card.Title as="h5" className="mb-2 fw-bold">{name}</Card.Title>
                <a 
            href="#!" 
            onClick={handleInfoToggle}
            className={`d-flex align-items-center ${styles.infoLink}`}
            aria-expanded={isExpanded}
            style={{ cursor: 'pointer' }} 
        >
          More information 
        
          <i className={`bi bi-chevron-${isExpanded ? 'up' : 'down'} ms-1 small`}></i>
        </a>
      </div>
        
      <Collapse in={isExpanded}>
        <div id={`info-collapse-${name}`} className={styles.cardExpandedContent}>
          <div className="mb-3">
              <p className={`small mb-1 ${styles.infoLink}`}>Author Name · Writer Name</p>
              <p className="text-secondary small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut wisi enim ad minim veniam, quis 
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea 
                  commodo consequat.
              </p>
          </div>
          <Button onClick={handleApplyClick} className={styles.primaryButton}>
              Apply for Position
          </Button>
        </div>
      </Collapse>
    </Card>
  );
};


const BecomeWriter = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  
  const [selectedCharacter, setSelectedCharacter] = useState("Character 1 Name");

  const [expandedCharacter, setExpandedCharacter] = useState(null); 
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  
  const [formData, setFormData] = useState({ fullName: "", email: "", sampleFile: null });

  const characters = characterData;
  
  const handleCardClick = (name) => {
      setSelectedCharacter(name);
      setShowApplicationForm(false); 
  }
  
  const handleCardExpand = (nameToExpand) => {
      if(nameToExpand) {
          setShowApplicationForm(false);
      }
      setExpandedCharacter(nameToExpand);
  }

  const handleApplyClick = () => {
      setExpandedCharacter(null);
      setShowApplicationForm(true); 
  }
  
  const handleCancelClick = () => {
      setShowApplicationForm(false);
  }

  const handleFormChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  const handleFileChange = (files) => setFormData({...formData, sampleFile: files[0]});

  const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Application submitted for: ${selectedCharacter}!`);
      setFormData({ fullName: "", email: "", sampleFile: null });
      setShowApplicationForm(false);
  }
  
  const contentMargin = isSidebarOpen ? '260px' : '70px';
  

  return (
    <div className={styles.appWrapper}> 
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div 
            className={styles.mainContent}
            style={{ marginLeft: contentMargin }} 
        >
            <Container fluid className="p-0"> 
                
                <h3 className="mb-4">Become a Writer</h3>
                
                <h5 className="mt-3 mb-3">Open Characters</h5>
                
                <Row xs={1} md={2} lg={4} className="g-4 mb-5 d-flex">
                  {characters.map((name) => (
                    <Col key={name}>
                      <CharacterCard
                        name={name}
                        isSelected={name === selectedCharacter}
                        isExpanded={name === expandedCharacter} 
                        onClick={handleCardClick}
                        onExpand={handleCardExpand} 
                        onApply={handleApplyClick}
                      />
                    </Col>
                  ))}
                </Row>
                
                {showApplicationForm && (
                    <div className="mt-4">
                        <h5 className="mb-3">Input your information:</h5>
                        <Form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                            <Row className="mb-4">
                                <Col>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Full Name" 
                                        name="fullName" 
                                        required 
                                        className={styles.customInput}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter Email Address" 
                                        name="email" 
                                        required 
                                        className={styles.customInput}
                                    />
                                </Col>
                            </Row>
                            
                            <FileUploadBox onFileChange={handleFileChange} />

                            <div className="d-flex justify-content-start mt-4">
                                <Button type="submit" className={`${styles.primaryButton} me-3`}>Upload File</Button>
                                <Button variant="outline-secondary" onClick={handleCancelClick} className={styles.outlineButton}>Cancel</Button>
                            </div>
                        </Form>
                    </div>
                )}
            </Container>
        </div>
    </div>
  );
};

export default BecomeWriter;