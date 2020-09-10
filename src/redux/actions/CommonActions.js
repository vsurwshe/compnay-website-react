import { CreateInstance } from "../../config/APIConfig"

const GetUserList=()=>{
    return(dispatch)=>{
        return CreateInstance()
            .get('/employee/getAllUsers.php ',{
                auth: {
                    username: 'admin',
                    password: '123456'
                },
                headers:{
                    "Content-Type":"application/json"
                }
            })
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