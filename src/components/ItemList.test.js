import React from "react";
import { shallow } from "enzyme";
import ItemList from "./ItemList";

const items = [
  {
    name: "Сандали",
    color: "зеленый",
    price: "23"
  }
];

it("renders without crashing", () => {
  expect(shallow(<ItemList items={items}/>)).toMatchSnapshot();
});
