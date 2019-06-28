import React, { Component } from 'react'
import { memberstovalidate } from './MemberFunctions'

class MembersToValidate extends Component {
    constructor() {
        super()
        this.state = {
            members: [],
        };
    }

    componentDidMount() {
        memberstovalidate()
            .then(res => {
                this.setState({ members: res });
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <h2>Validation d'adhésion</h2>
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
                                <button data-id={member.memb_id}>Valider</button>
                                <button data-id={member.memb_id}>Rejeter</button><hr /><br />
                            </section>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    // render() {
    //     return (
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-md-6 mt-5 mx-auto">
    //                     <form noValidate onSubmit={this.onSubmit.bind(this)}>
    //                         <h1 className="h3 mb-3 font-weight-normal">Demande d'adhésion</h1>
    //                         <div className="form-group">
    //                             <label htmlFor="memb_firstname">Prénom</label>
    //                             <input type="text"
    //                                 className="form-control"
    //                                 name="memb_firstname"
    //                                 placeholder="Entrez votre Prénom"
    //                                 value={this.state.memb_firstname}
    //                                 onChange={this.onChange}
    //                             />
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="memb_name">Nom</label>
    //                             <input type="text"
    //                                 className="form-control"
    //                                 name="memb_name"
    //                                 placeholder="Enter Last Name"
    //                                 value={this.state.memb_name}
    //                                 onChange={this.onChange}
    //                             />
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="memb_email">Courriel</label>
    //                             <input type="email"
    //                                 className="form-control"
    //                                 name="memb_email"
    //                                 placeholder="Entrez votre courriel"
    //                                 value={this.state.memb_email}
    //                                 onChange={this.onChange}
    //                             />
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="memb_password">Mot de passe</label>
    //                             <input type="password"
    //                                 className="form-control"
    //                                 name="memb_password"
    //                                 placeholder="Entrez votre mot de passe"
    //                                 value={this.state.memb_password}
    //                                 onChange={this.onChange}
    //                             />
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="memb_password2">Verification du mot de passe</label>
    //                             <input type="password"
    //                                 className="form-control"
    //                                 name="memb_password2"
    //                                 placeholder="Réenter votre mot de passe"
    //                                 value={this.state.memb_password2}
    //                                 onChange={this.onChange}
    //                             />
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="memb_photo">Téléverser votre photo</label>
    //                             <input type="file"
    //                                 className="form-control"
    //                                 name="memb_photo"
    //                                 placeholder="Votre photo"
    //                                 value={this.state.memb_photo}
    //                                 onChange={this.onChange}
    //                             />
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="memb_bio">Biographie</label>
    //                             <input type="text"
    //                                 className="form-control"
    //                                 name="memb_bio"
    //                                 placeholder="Enter votre biographie"
    //                                 value={this.state.memb_bio}
    //                                 onChange={this.onChange}
    //                             />
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="memb_hospital">Hopital</label>
    //                             <input type="text"
    //                                 className="form-control"
    //                                 name="memb_hospital"
    //                                 placeholder="Enter votre hopital"
    //                                 value={this.state.memb_hospital}
    //                                 onChange={this.onChange}
    //                             />
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="memb_function">Votre fonction dans l'hopital</label>
    //                             <input type="text"
    //                                 className="form-control"
    //                                 name="memb_function"
    //                                 placeholder="Entrez votre fonction"
    //                                 value={this.state.memb_function}
    //                                 onChange={this.onChange}
    //                             />
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="memb_city">Ville</label>
    //                             <input type="text"
    //                                 className="form-control"
    //                                 name="memb_city"
    //                                 placeholder="Entrez votre ville"
    //                                 value={this.state.memb_city}
    //                                 onChange={this.onChange}
    //                             />
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="memb_degree">Diplôme</label>
    //                             <input type="text"
    //                                 className="form-control"
    //                                 name="memb_degree"
    //                                 placeholder="Entrez votre diplôme"
    //                                 value={this.state.memb_degree}
    //                                 onChange={this.onChange}
    //                             />
    //                         </div>
    //                         <button type="submit"
    //                             className="btn btn-lg btn-primary btn-block">
    //                             Enregistrez
    //                             </button>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}




export default MembersToValidate