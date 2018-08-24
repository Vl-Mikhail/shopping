import React, { Fragment } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
import data from "../data/db.json";
import Popup from "../components/Popup";
import { DateRangePicker } from "react-dates";
import { fakeAuth } from "../common/api";
import CardItem from "../components/CardItem";

const INITIAL_STATE = {
  focusedInput: null,
  startDate: null,
  endDate: null,
  priceFrom: "",
  priceTo: "",
  isInStock: null,
  color: null
};

export default class Search extends React.Component {
  state = {
    items: [],
    INITIAL_STATE,
    user: { myItems: [] }
  };

  componentDidMount() {
    const myItems = data.filter(it => it.user === this.props.match.params.user);
    this.setState({
      user: { myItems, name: this.props.match.params.user },
      items: data
    });
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  clearForm = () => {
    this.setState({ ...INITIAL_STATE, items: data });
  };

  signOut = () => {
    console.log(this.props);
    fakeAuth.signout(() => this.props.history.push("/"));
  };

  filterItems = () => {
    let {
      items,
      isInStock,
      priceFrom,
      priceTo,
      startDate,
      endDate,
      color
    } = this.state;

    if (isInStock) {
      items = items.filter(item => item.inStock === isInStock);
    }

    if (priceFrom) {
      items = items.filter(item => item.price >= priceFrom);
    }

    if (priceTo) {
      items = items.filter(item => item.price <= priceTo);
    }

    if (startDate) {
      items = items.filter(item => Date.parse(item.issueDate) >= startDate);
    }

    if (endDate) {
      items = items.filter(item => Date.parse(item.issueDate) <= endDate);
    }

    if (color) {
      items = items.filter(item => item.color === color);
    }

    return items;
  };

  render() {
    const { user } = this.state;
    const filtredItems = this.filterItems();

    return (
      <Fragment>
        <Container className="mt-2">
          <Row>
            <Col style={{ alignSelf: "center" }}>
              <h3>{`Авторизированный ${user.name}`}</h3>
            </Col>
            <Col>
              <Popup
                color="link"
                buttonLabel={`В корзине: ${user.myItems.length}`}
                items={user.myItems}
              />
            </Col>
            <Col>
              <Button color="warning" onClick={this.signOut}>
                Выйти
              </Button>
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: 50 }}>
          <Row>
            <Col>
              <DateRangePicker
                startDate={this.state.startDate}
                startDateId="startId"
                endDate={this.state.endDate}
                endDateId="endId"
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })
                }
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
              />
            </Col>
            <Col>
              <Input
                type="checkbox"
                name="isInStock"
                checked={this.state.isInStock}
                onChange={this.handleChange}
              />{" "}
              <p>В наличии</p>
            </Col>
            <Col>
              <Button color="warning" onClick={this.clearForm}>
                Очистить
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              Цена от
              <Input
                name="priceFrom"
                value={this.state.priceFrom}
                onChange={this.handleChange}
              />
            </Col>
            <Col>
              до
              <Input
                name="priceTo"
                value={this.state.priceTo}
                onChange={this.handleChange}
              />
            </Col>
            <Col>
              Цвет
              <Input
                type="select"
                name="color"
                id="select"
                onChange={this.handleChange}
              >
                <option>красный</option>
                <option>зеленый</option>
                <option>голубой</option>
              </Input>
            </Col>
          </Row>
        </Container>
        <CardItem items={filtredItems} />
      </Fragment>
    );
  }
}
