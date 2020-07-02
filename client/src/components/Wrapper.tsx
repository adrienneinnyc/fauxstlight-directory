import React from "react";
import { Container } from "reactstrap";
import SiteHeader from "./SiteHeader";

const Wrapper: React.FC = ({ children }) => (
  <Container>
    <SiteHeader />
    <div>{children}</div>
  </Container>
);

export default Wrapper;
