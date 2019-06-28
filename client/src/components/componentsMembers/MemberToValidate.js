import React, { Component } from 'react'
import { tovalidate } from './MemberFunctions'

class MemberToValidate extends Component {
    constructor() {
        super()
        this.state = {
            memb_firstname: '',
            memb_name: '',
            memb_email: '',
            memb_password: '',
            memb_password2: '',
            memb_bio: '',
            memb_hospital: '',
            memb_function: '',
            memb_photo: '',
            memb_city: '',
            memb_degree: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let that = this;

        const member = {
            memb_firstname: this.state.memb_firstname,
            memb_name: this.state.memb_name,
            memb_email: this.state.memb_email,
            memb_password: this.state.memb_password,
            memb_password2: this.state.memb_password2,
            memb_bio: this.state.memb_bio,
            memb_hospital: this.state.memb_hospital,
            memb_function: this.state.memb_function,
            memb_photo: this.state.memb_photo,
            memb_city: this.state.memb_city,
            memb_degree: this.state.memb_degree
        }

        if (this.state.memb_password !== this.state.memb_password2) {
            alert("Votre mot de passe doit être identique");
        } else {
            tovalidate(member).then(res => {

                if (!res.data.error) {
                    that.props.history.push(`/login`)
                }
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit.bind(this)}>
                            <h1 className="h3 mb-3 font-weight-normal">Demande d'adhésion</h1>
                            <div className="form-group">
                                <label htmlFor="memb_firstname">Prénom</label>
                                <input type="text"
                                    className="form-control"
                                    name="memb_firstname"
                                    placeholder="Entrez votre Prénom"
                                    value={this.state.memb_firstname}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="memb_name">Nom</label>
                                <input type="text"
                                    className="form-control"
                                    name="memb_name"
                                    placeholder="Enter Last Name"
                                    value={this.state.memb_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="memb_email">Courriel</label>
                                <input type="email"
                                    className="form-control"
                                    name="memb_email"
                                    placeholder="Entrez votre courriel"
                                    value={this.state.memb_email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="memb_password">Mot de passe</label>
                                <input type="password"
                                    className="form-control"
                                    name="memb_password"
                                    placeholder="Entrez votre mot de passe"
                                    value={this.state.memb_password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="memb_password2">Verification du mot de passe</label>
                                <input type="password"
                                    className="form-control"
                                    name="memb_password2"
                                    placeholder="Réenter votre mot de passe"
                                    value={this.state.memb_password2}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="memb_photo">Téléverser votre photo</label>
                                <input type="file"
                                    className="form-control"
                                    name="memb_photo"
                                    placeholder="Votre photo"
                                    value={this.state.memb_photo}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="memb_bio">Biographie</label>
                                <input type="text"
                                    className="form-control"
                                    name="memb_bio"
                                    placeholder="Enter votre biographie"
                                    value={this.state.memb_bio}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="memb_hospital">Hopital</label>
                                <input type="text"
                                    className="form-control"
                                    name="memb_hospital"
                                    placeholder="Enter votre hopital"
                                    value={this.state.memb_hospital}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="memb_function">Votre fonction dans l'hopital</label>
                                <input type="text"
                                    className="form-control"
                                    name="memb_function"
                                    placeholder="Entrez votre fonction"
                                    value={this.state.memb_function}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="memb_city">Ville</label>
                                <input type="text"
                                    className="form-control"
                                    name="memb_city"
                                    placeholder="Entrez votre ville"
                                    value={this.state.memb_city}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="memb_degree">Diplôme</label>
                                <input type="text"
                                    className="form-control"
                                    name="memb_degree"
                                    placeholder="Entrez votre diplôme"
                                    value={this.state.memb_degree}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Enregistrez
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}




export default MemberToValidate