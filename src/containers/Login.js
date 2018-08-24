import React from "react";
import {
  Alert,
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
import bcrypt from "bcryptjs";
import { fakeAuth } from "../common/api";

export default class Login extends React.Component {
  state = {
    error: ""
  };

  saveUser = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const email = e.target["email"].value;
    const password = e.target["password"].value;

    const user = users.find(user => user.email === email);
    if (user) {
      if (bcrypt.compareSync(password, user.hash)) {
        fakeAuth.authenticate(() =>
          this.props.history.push(`/search/${user.email}`)
        );
      } else {
        this.setState({ error: "Неверный пароль" });
      }
    } else {
      this.setState({ error: "Такого пользователя не существует" });
    }
  };

  render() {
    const { error } = this.state;

    return (
      <Container className="mt-5">
        {error && <Alert color="danger">{error}</Alert>}
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
