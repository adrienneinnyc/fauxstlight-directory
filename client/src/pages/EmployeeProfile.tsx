import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
import { useParams } from "react-router-dom";
import { apiRequest } from "../modules/api";
import { Employee } from "../types";
import Loader from "../components/Loader";
import EditEmployee from "./employeeProfile/EditEmployee";
import DeleteEmployee from "./employeeProfile/DeleteEmployee";
import BackLink from "../components/BackLink";

interface RouteParams {
  id: string;
}

const EmployeeProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [employee, setEmployee] = useState<Employee>();

  const params: RouteParams = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await apiRequest.GET({
        url: `/api/employees/${params.id}`,
      });

      if (response) {
        setEmployee(response);
      }
    };

    fetchEmployee();
    setIsLoading(false);
  }, [params]);

  const renderResult = () => {
    if (isLoading) {
      return <Loader />;
    } else if (employee) {
      return (
        <>
          <Row className="d-flex justify-content-between lead">
            <Col className="d-flex flex-column lead justify-content-center flex-grow-1 lead">
              <Row className="display-3">
                {employee.firstName} {employee.lastName}
              </Row>
              <Row className="display-4 text-muted">{employee.jobTitle}</Row>
            </Col>
            <Col className="d-flex lead justify-content-end w-25 p-0">
              <img
                width="75%"
                src={employee.picture}
                alt={employee.firstName}
              />
            </Col>
          </Row>
          <Row className="my-4 lead">
            <Col md="3" className="font-weight-bold pl-0">
              Department:
            </Col>
            <Col>{employee.department}</Col>
          </Row>
          <Row className="mb-4 lead">
            <Col md="3" className="font-weight-bold pl-0">
              City:{" "}
            </Col>
            <Col>{employee.location}</Col>{" "}
          </Row>
          <Row className="mb-4 lead">
            <Col md="3" className="font-weight-bold pl-0">
              Email:{" "}
            </Col>
            <Col>{employee.email}</Col>
          </Row>
          <Row className="mb-4 lead">
            <Col md="3" className="font-weight-bold pl-0">
              Phone:{" "}
            </Col>
            <Col>{employee.phoneNumber}</Col>
          </Row>
          <Row className="mb-4 lead">
            <Col md="3" className="font-weight-bold pl-0">
              Ask Me About:{" "}
            </Col>
            <Col>{employee.interests}</Col>
          </Row>
          <Row className="mb-5">
            <Col xs="auto pl-0">
              <EditEmployee employee={employee} />
            </Col>
            <Col xs="auto">
              <DeleteEmployee employee={employee} />
            </Col>
          </Row>
        </>
      );
    } else {
      return <Row>Oops! We couldn't find that person.</Row>;
    }
  };

  return (
    <Container>
      <Row>
        <BackLink url="/employees" text="Back to All Employees" />
      </Row>
      {renderResult()}
    </Container>
  );
};

export default EmployeeProfile;
