import React from "react";
import { Router, Route, Switch } from "react-router";
import Directory from "./pages/Directory";
import { createBrowserHistory } from "history";
import EmployeeProfile from "./pages/EmployeeProfile";
import Wrapper from "./components/Wrapper";
import { Container } from "reactstrap";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Wrapper>
        <Container>
          <Switch>
            <Route exact path="/employees" component={Directory} />
            <Route exact path="/employees/:id" component={EmployeeProfile} />
            <Route path="/" component={Directory} />
          </Switch>
        </Container>
      </Wrapper>
    </Router>
  );
}

export default App;
