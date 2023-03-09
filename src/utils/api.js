import axios from "axios"


const BASE_URL = "https://saavn.me"

const headers = {
    Headers:'content-type: application/json'
}


export const fetchDataFromApi = async (url,params) =>{
    try {
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
        return data
    } catch (error) {
        console.log(error.message)
        return err
    }
}