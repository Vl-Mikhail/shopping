import React from "react";
import { Table } from "reactstrap";

export default ({ items }) => (
  <Table>
    <thead>
      <tr>
        <th>Название</th>
        <th>Цвет</th>
        <th>Цена</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.color}</td>
            <td>{item.price}$</td>
          </tr>
        );
      })}
    </tbody>
  </Table>
);
