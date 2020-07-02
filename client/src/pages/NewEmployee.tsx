import React from "react";
import { Container } from "reactstrap";
import { Employee } from "../types";
import { apiRequest } from "../modules/api";
import EmployeeForm from "../components/EmployeeForm";
import BackLink from "../components/BackLink";

const NewEmployee = () => {
  const createEmployee = async (data: Employee) => {
    const response = await apiRequest.POST({
      url: "/api/employees",
      data: data,
    });
    return response;
  };

  return (
    <Container>
      <BackLink url="/employees" text="Back to All Employees" />
      <EmployeeForm doOnSubmit={createEmployee} redirectURL="/employees" />
    </Container>
  );
};

export default NewEmployee;
