const axios = require('axios');

export const request = (opctions)=>{
      return new Promise((resolve,reject)=>{
        const params = {
            method: opctions.method || 'get',
            url: opctions.url || '',
            withCredentials: true 
        }
        switch(params.method.toUpperCase()){
            case 'GET':
            case 'DELETE':
            params.params = opctions.data
            default:
            params.data = opctions.data
        }
        axios(params)
        .then((result)=>{
            let data = result.data;
            resolve(data);
        })
        .catch((err)=>{
             reject(err)
        })  
          


    }) 

} 


export const setUserName = (username)=>{
     window.localStorage.setItem('username',username)
} 

export const getUserName = ()=>{

    return window.localStorage.getItem('username')
}  

export const removeUserName = (username)=>{
     window.localStorage.removeItem('username')
}    
