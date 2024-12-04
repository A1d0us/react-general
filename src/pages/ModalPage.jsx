import Modal from "../components/Modal";
import Button from "../components/Button";
import {useState} from "react";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  return (
    <div>
      <Button onClick={handleClick} primary>Open modal</Button>
      {showModal && <Modal
        onClose={handleClose}
        actionBar={<Button onClick={handleClose} primary>I accept</Button>}
      >
        <p>
          Here is important agreement!
        </p>
      </Modal>}
    </div>
  );
}

export default ModalPage;