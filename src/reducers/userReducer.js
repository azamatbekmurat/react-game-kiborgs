import constants from './../constants/index.js'

export default (state = {}, actions) => {
    const { userKey, email, name } = action;
    const { c } = constants
    let currentUser;
    switch (action.type) {
        case c.REMOVE_USER:
            currentUser = Object.assign({}, state, {email: null, name: null, userKey: null});
            localStorage['kiborgsReduxStore'] = {};
            return currentUser;
        case c.LOGIN_USER:
            const userData = {
                userKey: userKey,
                email: email,
                name: name
            }
            currentUser = Object.assign({}, state, userData);
            localStorage['kiborgsReduxStore'] = JSON.stringify(userData);
            console.log(localStorage['kiborgsReduxStore']);
            return currentUser;
        default:
            return state;
    }
}

//CREATE_USER
//UPDATE_USER
//DELETE_USER
//SET_USER