import React from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import bcrypt from "bcryptjs";

export default class SignUp extends React.Component {
  state = {
    error: ""
  };

  saveUser = e => {
    e.preventDefault();
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    const confirmPassword = e.target["confirmPassword"].value;

    if (!email || !password || !confirmPassword) {
      this.setState({ error: "Поля не должны быть пустые" });
      return;
    }

    if (password !== confirmPassword) {
      this.setState({ error: "Пароли не совпадают" });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.email === email)) {
      this.setState({ error: "Такой пользователь уже есть" });
    } else {
      const salt = bcrypt.genSaltSync(process.env.SALT);
      const hash = bcrypt.hashSync(password, salt);

      localStorage.setItem(
        "users",
        JSON.stringify([...users, { email, hash }])
      );
      this.props.history.push("/");
    }
  };

  render() {
    const { error } = this.state;

    return (
      <Container className="mt-5">
        {error && <Alert color="danger">{error}</Alert>}
        <Form onSubmit={this.saveUser}>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={5}>
              <Input
                type="email"
                name="email"
                id="Email"
                placeholder="Введите email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Password" sm={2}>
              Пароль
            </Label>
            <Col sm={5}>
              <Input
                type="password"
                name="password"
                id="Password"
                placeholder="Введите пароль"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>
              Подтвердите пароль
            </Label>
            <Col sm={5}>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Павторите пароль"
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Зарегистрироваться</Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}
