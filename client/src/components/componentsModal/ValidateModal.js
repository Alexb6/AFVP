import React, { Component } from 'react'
import './ValidateModal.scss';

class ValidateModal extends Component {
    constructor() {
        super();

        this.state = {
            show: false
        }
    }


    render() {
        return (
            <div className="modal-wrapper"
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-10vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Modal Header</h3>
                    <span className="close-modal-btn" onClick={this.props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {this.props.content}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={this.props.close}>Fermer</button>
                    {/* <button className="btn-continue">CONTINUE</button> */}
                </div>
            </div>
        )
    }
}

export default ValidateModal;