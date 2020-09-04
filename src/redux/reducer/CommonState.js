const initialState={
    userList:[]
}

const CommonState=(state = initialState, action)=>{
    switch ( action && action.type) {
        case "SAVE_USER_LIST":
            return {...state, userList: action.userList}
        default:
            return state
    }
}

export default CommonState;