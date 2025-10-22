import Modal from 'react-bootstrap/Modal';
export const CommonModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      centered
    >
     
      <Modal.Body className={props.bodyClasses}>
        {props.children}
      </Modal.Body>
    </Modal>
  );
}
