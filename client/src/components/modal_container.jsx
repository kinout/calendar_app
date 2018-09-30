import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import FormContainer from './form_container';

export default class ModalContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <Modal className="modal-container"
            show={true}
            onHide={this.props.handleHideModal}
            animation={true}
            bsSize="small">

            <Modal.Header closeButton>
              <Modal.Title>新規登録</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <FormContainer createSchedule={this.props.createSchedule} />
            </Modal.Body>

          </Modal>
        </div>
      </div>
    )
  }
}