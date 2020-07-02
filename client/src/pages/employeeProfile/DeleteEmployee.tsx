import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Container,
  ModalFooter,
} from "reactstrap";
import { Employee } from "../../types";
import { apiRequest } from "../../modules/api";
import { Redirect } from "react-router";

interface Props {
  employee: Employee;
}

const DeleteEmployee = ({ employee }: Props) => {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const deleteEmployee = async () => {
    if (employee) {
      const response = await apiRequest.DELETE({
        url: `/api/employees/${employee.id}`,
      });

      if (response) {
        setRedirect(true);
      } else {
        toggle();
      }
    }
  };

  const cancelButton = (
    <Button close onClick={() => setModal(false)}>
      &times;
    </Button>
  );

  if (redirect) {
    return <Redirect to="/employees" />;
  }

  return (
    <>
      <Button onClick={toggle} color="info" size="lg">
        Delete Employee
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader className="justify-content-between" close={cancelButton}>
          Delete {employee.firstName}
        </ModalHeader>
        <ModalBody>
          <Container>
            <Row>Are you sure? This action cannot be undone.</Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Row>
            <Col className="pr-0">
              <Button onClick={toggle}>Cancel</Button>
            </Col>
            <Col className="pr-0">
              <Button color="danger" onClick={deleteEmployee}>
                Delete
              </Button>
            </Col>
          </Row>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteEmployee;
