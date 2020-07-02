import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "reactstrap";
import { apiRequest } from "../modules/api";
import EmployeesList from "./directory/EmployeesList";
import Loader from "../components/Loader";
import { Employee } from "../types";
import { Link } from "react-router-dom";

const Directory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const employees = await apiRequest.GET({
        url: "/api/employees",
      });

      if (employees) {
        setEmployees(employees);
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Row className="mb-3">
        <Col className="d-flex justify-content-end">
          <Link to="/employees/create">
            <Button color="info">Add New Employee</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <EmployeesList employees={employees} />
        </Col>
      </Row>
    </>
  );
};

export default Directory;
