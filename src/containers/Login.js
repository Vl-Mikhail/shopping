import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  render () {
    return (
      <div>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!"/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
        <p>
          <Link to="/singup">Регистрация</Link>
        </p>
      </div>
    );
  }
}
