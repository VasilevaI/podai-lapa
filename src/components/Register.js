/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RegisterForm from './RegisterForm';

const Register = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="d-flex align-items-center ml-2">
      <Button outline color ="light" onClick={toggle} className="btn">{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Регистрация</ModalHeader>
        <ModalBody>
            <RegisterForm/>
        </ModalBody>
        <ModalFooter>
          За да използвате максимално услугите на този сайт трябва да сте регистриран потребител.
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Register;