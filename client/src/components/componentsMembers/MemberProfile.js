import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            memb_firstname: '',
            memb_name: '',
            memb_email: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            memb_firstname: decoded.memb_firstname,
            memb_name: decoded.memb_name,
            memb_email: decoded.memb_email
        })
    }

    render () {
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
                </div>
            </div>
        )
    }
}

export default Profile