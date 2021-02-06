import axios from "axios";

const requests ={
    get:(url) =>{
        return axios.get(url);
    },
    post:(url, data) =>{
        return axios.post(url,data);
    },
    put:(url, data) =>{
        return axios.put(url, data)
    },
    delete:(url, data) =>{
        return axios.delete(url, data);
    },
    postMedia:(url,data)=>{
        return axios.post(url,data,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    }
};
export default requests;