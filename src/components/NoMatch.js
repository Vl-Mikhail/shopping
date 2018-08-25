import React from "react";
import { Container, Jumbotron } from "reactstrap";

export default () => {
  return (
    <Container>
      <Jumbotron>
        <h1 className="display-3">404</h1>
        <p className="lead">Страница не найдена</p>
        <hr className="my-2" />
      </Jumbotron>
    </Container>
  );
};
