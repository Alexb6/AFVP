import axios from 'axios'

// Defining the method to send a user's infos for a membership validation
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

// Defining the method for a user to log to his membership space
export const login = user => {
    return axios
        .post('/login', {
            memb_email: user.memb_email,
            memb_password: user.memb_password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token)
            return res.data
        })
        .catch(err => {
            return err;
        })
}

// Defining the method to display all the user's membership demands
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

// Defining the method for the admin to validate a membership
export const validatemember = member => {
    return axios
        .put('/validatemember', {
            memb_id: member.memb_id,
            memb_email: member.memb_email
        })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        })
}


// Defining the method for the admin to reject a membership
export const rejectmember = memb_id => {
    return axios
        .put('/rejectmember', {
            memb_id: memb_id
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err;
        })
}


// Defining the method to change the member status to registered after payment
export const statustoregistered = id => {
    return axios
        .put('/statustoregistered', {
            memb_id: id
        })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        })
}

