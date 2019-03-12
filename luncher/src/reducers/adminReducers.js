const initialState = {
    admins: [],
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