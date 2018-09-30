import React, {Component} from "react";
import { Modal, Button } from "react-bootstrap";

export default class ModalContainer extends Component {
  render(){
    return <div>
      <div>
        <Modal className="modal-container"
               show={true}
               onHide={this.props.handleHideModal}
               animation={true}
               bsSize="small">

          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One of fine body.........
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.handleHideModal}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>;
  }
}