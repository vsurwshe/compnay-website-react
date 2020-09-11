const initialState={
    userData:[],
    authrization:""
}

const UserState=(state = initialState, action)=>{
    switch (action && action.type) {
        case "SAVE_USER_AUTH":
            return{...state, userData:action.userData}
        default:
            return state;
    }
}
export default UserState;