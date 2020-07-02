import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Employee } from "../../types";
import { apiRequest } from "../../modules/api";
import EmployeeForm from "../../components/EmployeeForm";

interface Props {
  employee: Employee;
}

const EditEmployee = ({ employee }: Props) => {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);

  const editEmployee = async (data: Employee) => {
    if (employee) {
      await apiRequest.PUT({
        url: `/api/employees/${employee.id}`,
        data: data,
      });

      toggle();
    }
  };

  const cancelButton = (
    <Button close onClick={() => setModal(false)}>
      &times;
    </Button>
  );

  return (
    <>
      <Button outline size="lg" onClick={toggle} color="info">
        Edit Info
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader className="justify-content-between" close={cancelButton}>
          Edit {employee.firstName}'s Info
        </ModalHeader>
        <ModalBody>
          <EmployeeForm
            doOnSubmit={editEmployee}
            employee={employee}
            redirectURL={`/employees/${employee.id}`}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default EditEmployee;
