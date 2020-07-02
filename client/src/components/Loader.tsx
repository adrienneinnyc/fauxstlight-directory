import React from "react";
import { Col, Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div>
      <Col
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <Spinner color="info" />
      </Col>
    </div>
  );
};

export default Loader;
