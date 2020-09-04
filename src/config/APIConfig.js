import Axios from "axios";
// const API_URL="http://vany-api.rf.gd/api/";
const API_URL="http://localhost:8001/api/";
const API_EXE_TIME=500;

const CreateInstance=()=> {
    let instance = Axios.create({
      baseURL: API_URL,
    });
    return instance;
}

export{
    API_EXE_TIME,
    API_URL,
    CreateInstance
}