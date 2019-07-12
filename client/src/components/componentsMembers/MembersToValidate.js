import React, { Component } from 'react'
import { memberstovalidate, validatemember, rejectmember} from './MemberFunctions'
import Button from 'react-bootstrap/Button'
import FlashMessage from 'react-flash-message'
import './MembersToValidate.scss'


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

    validate(member) {
        let that = this;
        validatemember(member).then(function () {

            that.setState({ show: true, message: 'Le status de ' + member.memb_firstname + ' ' + member.memb_name + ' a été changé en "inregistration".' });
        })
    }

    reject(member) {
        let that = this;
        rejectmember(member.memb_id).then(function () {

            that.setState({ show: false, message: 'Le status de ' + member.memb_firstname + ' ' + member.memb_name + ' a été changé en "rejected".' });
        })
    }



    render() {
        let flash;
        if (this.state.show) {
            flash = <FlashMessage duration={7000} persistOnHover={true}>
                <div className="alert-success"><p>{this.state.message}</p></div>
            </FlashMessage>;
        } else {
            flash = <FlashMessage duration={7000} persistOnHover={true}>
                <div className="alert-warning"><p>{this.state.message}</p></div>
            </FlashMessage>;
        }
        return (
            <div className="container">
                <div className="flashMessage">{flash}</div>
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <h2>Demandes d'adhésion</h2>
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
                                <Button onClick={() => { this.validate(member) }} variant="primary" >Valider</Button>
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


export default MembersToValidate