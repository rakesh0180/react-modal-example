import React, { useRef } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import useOutsideClick from "../helper/useOutsideClick";

const ModalContainer = ({ isOpen, handleChange }) => {
  const modalRef = useRef();

  useOutsideClick(modalRef, () => {
    // This function is called when a click occurs outside the modal
    handleChange();
  });
  return (
    <div ref={modalRef}>
      <Modal isOpen={isOpen} toggle={handleChange} backdrop={false}>
        <ModalHeader toggle={handleChange}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>
          Do Something
        </Button>{" "} */}
          <Button color="secondary" onClick={handleChange}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalContainer;
