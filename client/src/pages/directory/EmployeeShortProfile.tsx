import React from "react";
import { Row, Col } from "reactstrap";
import { Employee } from "../../types";
import { Link } from "react-router-dom";

interface Props {
  employee: Employee;
}

const EmployeeShortProfile = ({ employee }: Props) => {
  return (
    <Row className="mb-3 border-bottom border-light">
      <Col xs="7" md="3">
        <img width="100%" src={employee.picture} alt={employee.firstName}></img>
      </Col>
      <Col xs="auto" md="auto" className="lead">
        <Link to={`/employees/${employee.id}`} className="text-info">
          {employee.firstName} {employee.lastName}
        </Link>
        <div>{employee.jobTitle}</div>
        <div>{employee.department}</div>
      </Col>
    </Row>
  );
};

export default EmployeeShortProfile;
