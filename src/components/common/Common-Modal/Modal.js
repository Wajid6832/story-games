import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export const CommonModal = (props) => {
  const {setselectedWorkRoom} = props;
  console.log('setselectedWorkRoom', setselectedWorkRoom);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     
      <Modal.Body>
        {props.children}
      </Modal.Body>
    </Modal>
  );
}
