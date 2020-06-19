import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoginForm from './LoginForm';

const Register = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="d-flex align-items-center ml-2">
      <Button outline color="light" onClick={toggle} className="btn">{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Вход</ModalHeader>
        <ModalBody>
            <LoginForm/>
        </ModalBody>
        <ModalFooter>
          Забравена парола не може да се възстанови!
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Register;