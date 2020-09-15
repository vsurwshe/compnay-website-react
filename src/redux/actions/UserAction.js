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

const UserLogout=()=>{
    console.log("Called UserLogout")
    return(dispatch)=>{
        return dispatch(clearData());
    }
}

//-----------------------------
export function saveUserAuthicate(userData){
    return{
        type:"SAVE_USER_AUTH",
        userData
    }
}

export function clearData(){
    console.log("Called Clear Data")
    return{
        type:"CLEAR_DATA"
    }
}

export {
    UserLogin,
    UserLogout   
}