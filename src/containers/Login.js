import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import { fakeAuth } from "../common/api";

export default class Login extends React.Component {
  saveUser = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const email = e.target["email"].value;
    const password = e.target["password"].value;

    const user = users.find(user => user.email === email);
    if (user) {
      if (user.password === password) {
        fakeAuth.authenticate(() => this.props.history.push("/search"));
      } else {
        console.log("Неверный пароль");
      }
    } else {
      console.log("Такого пользователя не существует");
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.saveUser}>
          <FormGroup row>
            <Col sm={4}>
              <Label for="Email">Email</Label>
              <Input
                type="email"
                name="email"
                id="Email"
                placeholder="something@idk.cool"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={4}>
              <Label for="Password">Password</Label>
              <Input
                type="password"
                name="password"
                id="Password"
                placeholder="don't tell!"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={4}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
        <Row>
          <Col>
            <Link to="/singup">Регистрация</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
