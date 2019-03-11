const initialState = {
    admins: [
        { school: 'Great Oaks Elementary', need: '$9700.00', needMet: false, id: 12345 },
        { school: 'Cyprus Creek Elementary', need: '$12,300.00', needMet: false, id: 45678 },
    ],
    isAdmin: false,
    isLoggingIn: false,
    loggedIn: false,
    fetchingInfo: false,
    adminInfo: {},
    error: ''
}

export const adminReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        default:
            return state;
    }
        
}