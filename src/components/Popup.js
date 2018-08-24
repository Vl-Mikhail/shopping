import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import ItemList from "./ItemList";

class Popup extends React.Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { items, buttonLabel } = this.props;

    return (
      <div>
        <Button color="link" onClick={this.toggle}>
          {buttonLabel}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Список товаров</ModalHeader>
          <ModalBody>
            <ItemList items={items} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Оформить
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Отмена
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Popup.propTypes = {
  items: PropTypes.array,
  buttonLabel: PropTypes.string
};

Popup.defaultProps = {
  items: [],
  buttonLabel: ""
};

export default Popup;
