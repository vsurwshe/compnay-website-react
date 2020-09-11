import { CreateInstance } from "../../config/APIConfig"

const UserLogin=(bodyData)=>{
    return(dispatch)=>{
        return CreateInstance()
            .post('/users/users.php ',bodyData,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveUserAuthicate(response.data)) )
            .catch(error => console.log("Error ", error))
    }
}

//-----------------------------
export function saveUserAuthicate(userData){
    return{
        type:"SAVE_USER_AUTH",
        userData
    }
}

export {
    UserLogin   
}