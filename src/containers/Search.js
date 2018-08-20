import React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import data from '../data/db.json';

export default class Search extends React.Component {
  state = {
    cart: null
  };

  componentDidMount () {
  }

  render () {

    return (
      <div>
        <Card style={ { display: 'flex', flexDirection: 'row' } }>
          <CardImg top width="100%" src={ data[0].image }
                   alt="Card image cap" style={ { width: 200 } }/>
          <CardBody>
            <CardTitle>{ data[0].name }</CardTitle>
            <CardTitle>{ data[0].color }</CardTitle>
          </CardBody>
          <CardBody>
            <CardTitle>{ data[0].issueDate }</CardTitle>
            <CardTitle>{ data[0].inStock }</CardTitle>
          </CardBody>
          <CardBody>
            <CardTitle>{ data[0].price }</CardTitle>
            <Button>Отложить</Button>
          </CardBody>
        </Card>
        <p>
          <Link to="/singup">Регистрация</Link>
        </p>
        <p>
          <Link to="/">Войти</Link>
        </p>
      </div>
    );
  }
}
