import axios from 'axios'

export const tovalidate = newUser => {
    return axios
        .post('/tovalidate', {
            memb_firstname: newUser.memb_firstname,
            memb_name: newUser.memb_name,
            memb_email: newUser.memb_email,
            memb_password: newUser.memb_password,
            memb_bio: newUser.memb_bio,
            memb_hospital: newUser.memb_hospital,
            memb_function: newUser.memb_function,
            memb_photo: newUser.memb_photo,
            memb_city: newUser.memb_city,
            memb_degree: newUser.memb_degree
        })
        .then(res => {
            console.log("Registered for validation");
            return res;
        })
}

export const login = user => {
    return axios
        .post('/login', {
            memb_email: user.memb_email,
            memb_password: user.memb_password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            return err;
        })
}


export const memberstovalidate = members => {
    return axios
        .get('/memberstovalidate', {
            members
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err;
        })
}