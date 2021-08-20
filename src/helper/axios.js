import axios from 'axios'

const  axiosNotToken = (endpoint, data, method = "GET")=>{
  const url = `https://anapioficeandfire.com/api/${endpoint}`;
 
  if(method === 'GET'){
    return axios(url);
  }else{
    return axios(url,{
      method,
      data
    });
  } 
}

export {axiosNotToken}