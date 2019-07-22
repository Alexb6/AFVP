import React, { Component } from 'react';
import { memberstovalidate, validatemember, rejectmember } from './MemberFunctions.js';
import Button from 'react-bootstrap/Button';
import './MembersToValidate.scss';
import ValidateModal from '../componentsModal/ValidateModal';
// import RejectModal from '../componentsModal/RejectModal';


class MembersToValidate extends Component {
    constructor() {
        super()
        this.state = {
            members: [],
            show: false,
            message: null
        };
        this.validate = this.validate.bind(this);
        this.reject = this.reject.bind(this);
    }

    componentDidMount() {
        memberstovalidate()
            .then(res => {
                this.setState({ members: res });
            })
    }

    closeModalHandler = () => {
        this.setState({
            show: false
        });
    }

    validate = (member) => {
        let that = this;
        validatemember(member).then(() => {
            that.setState({ show: true, message: 'Vous avez validé l\'adhésion de ' + member.memb_firstname + ' ' + member.memb_name + ' .' });

            memberstovalidate()
                .then(res => {
                    this.setState({ members: res });
                })
        })
    }

    reject = (member) => {
        let that = this;
        rejectmember(member).then(() => {
            that.setState({ show: true, message: 'Vous avez rejeté l\'adhésion de ' + member.memb_firstname + ' ' + member.memb_name + ' .' });

            memberstovalidate()

                .then(res => {
                    this.setState({ members: res });
                })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="fit_row col-12">
                        {this.state.show
                            ?
                            <div className="back-drop">
                                <ValidateModal
                                    className="modal"
                                    show={this.state.show}
                                    close={this.closeModalHandler}
                                    content={this.state.message}
                                >
                                </ValidateModal>
                            </div>
                            : null
                        }
                    </div>

                    <div className="col-md-6 mt-5 mx-auto">
                        <h2>Demandes d'adhésion</h2><br />
                        {this.state.members.map(member =>
                            <section key={member.memb_id}>
                                <p>Photo : {member.memb_photo}</p>
                                <p>Prénom : {member.memb_firstname}</p>
                                <p>Nom : {member.memb_name}</p>
                                <p>Courriel : {member.memb_email}</p>
                                <p>Biographie : {member.memb_bio}</p>
                                <p>Hopital : {member.memb_hospital}</p>
                                <p>Fonction : {member.memb_function}</p>
                                <p>Ville : {member.memb_city}</p>
                                <p>Diplôme : {member.memb_degree}</p><br />
                                <Button className="mr-3" onClick={() => { this.validate(member) }} variant="primary" >Valider</Button>
                                <Button onClick={() => { this.reject(member) }} variant="warning" >Rejeter</Button>
                                <hr /> <br />
                            </section>
                        )}
                    </div>
                </div>
            </div >
        )
    }
}


export default MembersToValidate;