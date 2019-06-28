import React, { Component } from 'react'
import { login } from './MemberFunctions'

class MemberLogin extends Component {
    constructor() {
        super()
        this.state = {
            memb_email: '',
            memb_password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const member = {
            memb_email: this.state.memb_email,
            memb_password: this.state.memb_password
        }

        login(member).then(res => {
            if (res) {
                this.props.history.push(`/profile`)
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="memb_email">Email</label>
                                <input type="email"
                                    className="form-control"
                                    name="memb_email"
                                    placeholder="Entrez votre email"
                                    value={this.state.memb_email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="memb_password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="memb_password"
                                    placeholder="Entrez votre mot de passe"
                                    value={this.state.memb_password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Log in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemberLogin