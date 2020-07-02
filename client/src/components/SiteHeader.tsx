import React from "react";
import { Row, Col, Container } from "reactstrap";

const SiteHeader = () => {
  return (
    <Container className="mb-4 mt-3">
      <Row>
        <Col>
          <h1 className="display-3 mb-0" style={{ letterSpacing: "6px" }}>
            <span className="font-italic">Faux</span>stlight
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-muted h5 pb-3 border-bottom border-info">
            EMPLOYEE DIRECTORY
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default SiteHeader;
