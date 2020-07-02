import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { departments } from "../constants";
import { useForm } from "react-hook-form";
import { Employee } from "../types";
import { Redirect } from "react-router";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const employeeSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  location: yup.string(),
  phoneNumber: yup.string(),
  jobTitle: yup.string().required(),
  department: yup.string().required(),
  interests: yup.string(),
  picture: yup.string(),
});

interface Props {
  doOnSubmit: (data: Employee) => {};
  redirectURL: string;
  employee?: Employee;
}

const EmployeeForm = ({ doOnSubmit, redirectURL, employee }: Props) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(employeeSchema),
  });
  const [redirect, setRedirect] = useState(false);

  const onSubmit = (data: Employee) => {
    const result = doOnSubmit(data);
    if (result) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Redirect to={redirectURL} />;
  }

  return (
    <Form>
      <Row>
        <Col md="6">
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              defaultValue={employee && employee.firstName}
              innerRef={register({ required: true })}
            />
            {errors.firstName && (
              <div className="text-info">First name is required</div>
            )}
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              defaultValue={employee && employee.lastName}
              innerRef={register({ required: true })}
            />
            {errors.lastName && (
              <div className="text-info">Last name is required</div>
            )}
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="jobTitle">Job Title</Label>
        <Input
          type="text"
          name="jobTitle"
          id="jobTitle"
          defaultValue={employee && employee.jobTitle}
          innerRef={register({ required: true })}
        />
        {errors.jobTitle && (
          <div className="text-info">Job title is required</div>
        )}
      </FormGroup>
      <Row>
        <Col md="6">
          <FormGroup>
            <Label for="department">Department</Label>
            <Input
              type="select"
              name="department"
              id="department"
              defaultValue={employee && employee.department}
              innerRef={register({ required: true })}
            >
              {departments.map((dep, idx) => (
                <option key={idx}>{dep}</option>
              ))}
            </Input>
            {errors.department && (
              <div className="text-info">Department is required</div>
            )}
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label for="location">City</Label>
            <Input
              type="text"
              name="location"
              id="city"
              innerRef={register}
              defaultValue={employee && employee.location}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          {" "}
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="text"
              name="email"
              id="exampleEmail"
              defaultValue={employee && employee.email}
              innerRef={register({ required: true })}
            />
            {errors.email && <div className="text-info">Email is required</div>}
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label for="phoneNumber">Phone</Label>
            <Input
              type="text"
              name="phoneNumber"
              id="phone"
              defaultValue={employee && employee.phoneNumber}
              innerRef={register}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="picture">Picture</Label>
        <Input
          type="text"
          name="picture"
          id="picture"
          innerRef={register}
          defaultValue={employee && employee.picture}
        />
      </FormGroup>
      <FormGroup>
        <Label for="interests">Interests</Label>
        <Input
          type="text"
          name="interests"
          id="interests"
          defaultValue={employee && employee.interests}
          innerRef={register}
        />
      </FormGroup>
      <Row className="d-flex justify-content-center">
        <Col>
          <Button color="info" onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default EmployeeForm;
