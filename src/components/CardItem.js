import React from "react";
import {
  Container,
  CardBody,
  CardTitle,
  Row,
  Card,
  CardImg,
  Input,
  Button
} from "reactstrap/";

export default ({ items }) => (
  <Container style={{ marginTop: 50 }}>
    <Row />
    {items.map((item) => (
      <Card key={item.id} style={{ display: "flex", flexDirection: "row" }}>
        <CardImg
          top
          src={item.image}
          alt="Card image cap"
          style={{ width: 150, height: 150 }}
        />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardTitle>{item.color}</CardTitle>
        </CardBody>
        <CardBody>
          <CardTitle>{item.issueDate}</CardTitle>
          <CardTitle>
            <Input type="checkbox" disabled checked={true} />
            In stock
          </CardTitle>
        </CardBody>
        <CardBody>
          <CardTitle>{item.price}$</CardTitle>
          <Button color="success">Отложить</Button>
        </CardBody>
      </Card>
    ))}
  </Container>
);
