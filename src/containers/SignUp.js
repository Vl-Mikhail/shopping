import React from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

export default class SignUp extends React.Component {

  saveUser = (e) => {
    e.preventDefault();
    const email = e.target['email'].value;
    const password = e.target['password'].value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === email)) {
      console.log('Такой пользователь уже есть');
    } else {
      localStorage.setItem('users', JSON.stringify([...users, { email, password }]));
      this.props.history.push('/');
    }
  };

  render () {
    return (
      <Form onSubmit={ this.saveUser }>
        <FormGroup row>
          <Label for="exampleEmail" sm={ 2 }>Email</Label>
          <Col sm={ 5 }>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="examplePassword" sm={ 2 }>Пароль</Label>
          <Col sm={ 5 }>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={ 2 }>Подтвердите пароль</Label>
          <Col sm={ 5 }>
            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="password placeholder"/>
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={ { size: 10, offset: 2 } }>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}