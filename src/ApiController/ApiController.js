import axios from 'axios';

export const API_BASE_URL = 'http://64.227.148.16/styeweb/api'


const ApiController = {
    userSignup: (url, data) => {
        return axios.post(`${API_BASE_URL}${url}`, data)
    },
    otpVerification: (Otpdata, url) => {
        console.log("djdjdjjd", url)
        console.log("ssssssssssssssss", Otpdata)

        return axios.post(`${API_BASE_URL}${Otpdata}`, url);
    },

    LoginUser: (url, data) => {
        console.log("lpogin", url)
        console.log("logind", data)
        return axios.post(`${API_BASE_URL}${url}`, data)
    },

    LogOutuser: (url,header) => {
        console.log(url,"url")
        console.log(header,"header")
        return axios.post(`${API_BASE_URL}/${url}`,{},{headers:header})
    },

     VerifyOtp: (url, data) => {
        return axios.post(`${API_BASE_URL}${url}`, data)
    },



    

}
export default ApiController