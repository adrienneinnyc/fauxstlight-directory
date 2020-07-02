import React from "react";
import { Employee } from "../../types";
import EmployeeShortProfile from "./EmployeeShortProfile";

interface Props {
  employees: Employee[];
}

const EmployeeList = ({ employees }: Props) => {
  return (
    <>
      {employees.map((employee: Employee, index: number) => {
        return (
          <div key={index}>
            <EmployeeShortProfile employee={employee} />
          </div>
        );
      })}
    </>
  );
};

export default EmployeeList;
