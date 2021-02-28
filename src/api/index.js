import axios from "axios";

const backendApi = 'https://69y5xqj9ll.execute-api.us-west-2.amazonaws.com/dev'

const signup = async ({email,password,name,company})=>{

    try{
        const result = await axios.post(backendApi,{email,password,name,company});
        return result;
    }catch(e){
        return e.message
    }

}


export default {signup}