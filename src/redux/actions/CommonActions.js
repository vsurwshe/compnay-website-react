import { CreateInstance } from "../../config/APIConfig"

const GetUserList=()=>{
    return(dispatch)=>{
        return CreateInstance()
            .get('users/getAllUsers/')
            .then(response => dispatch(SaveUserList(response.data)) )
            .catch(error => console.log("Error ", error))
    }
}

//---------------------------------

export function SaveUserList(userList){
    return{
        type:"SAVE_USER_LIST",
        userList
    }
}

export{
    GetUserList
}