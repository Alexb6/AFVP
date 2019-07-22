import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
// import Button from 'react-bootstrap/Button'
import { PayPalButton } from 'react-paypal-button-v2'
import { statustoregistered } from './MemberFunctions'
import { permission } from './MemberFunctions'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            memb_firstname: '',
            memb_name: '',
            memb_email: '',
            memb_status: ''
        }
    }


    componentWillMount() {
        permission().then(res => {
            if (!res.permission) {
                this.props.history.push('/');
            } else {
                const token = localStorage.usertoken
                const decoded = jwt_decode(token)
                this.setState({
                    memb_id: decoded.memb_id,
                    memb_firstname: decoded.memb_firstname,
                    memb_name: decoded.memb_name,
                    memb_email: decoded.memb_email,
                    memb_status: decoded.memb_status
                })
            }
        })
    }


    render() {
        let that = this;
        let validationButton = (this.state.memb_status === 'inregistration')
            ?
            <PayPalButton
                amount="80"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);

                    // OPTIONAL: Call your server to save the transaction
                    // return fetch("/paypal-transaction-complete", {
                    //     method: "post",
                    //     body: JSON.stringify({
                    //         orderID: data.orderID
                    //     })
                    // });

                    return statustoregistered(that.state.memb_id);
                }}
                options={{
                    clientId: 'AUkbwCWK1QrPfC6_z15_5Sml1I2EJGrHmUNs944v_DOFOzGh7rvcTlPHMj4RtOndqxdUa03TM6Wa7QsG',
                    currency: 'EUR'
                }}
            />
            :
            null;
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Prénom</td>
                                <td>{this.state.memb_firstname}</td>
                            </tr>
                            <tr>
                                <td>Nom</td>
                                <td>{this.state.memb_name}</td>
                            </tr>
                            <tr>
                                <td>Courriel</td>
                                <td>{this.state.memb_email}</td>
                            </tr>
                        </tbody>
                    </table>
                    {validationButton}
                </div>
            </div>
        )
    }
}

export default Profile