import {URL} from "../Components/Url"
// const LoginAuth = async (username, password) => {

//     const response = await fetch("https://virtualclosetapi.azurewebsites.net/User/Login", { 
//         method: "POST",
//         headers: {
//              "Content-Type" : "application/json"
//         },
//         body: JSON.stringify({
//             "Username": username ,
//             "Password": password
//         })
//     })

//     const data = await response.json();
//     return data;
    
//   }
const LoginAuth = async (username, password) => {

    const response = await fetch(`${URL}/User/Login`, { 
        method: "POST",
        headers: {
             "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "Username": username ,
            "Password": password
        })
    })

    const data = await response.json();
    return data;
    
  }

//   const getUser = async (username) => {
//     const response = await fetch("https://virtualclosetapi.azurewebsites.net/User/getCurrentUser", { 
//         method: "Post",
//         headers: {
//              "Content-Type" : "application/json"
//         },
//         body: JSON.stringify({
//             "Username": username,
//         })
//     })

//     const data = await response.json();
  
//     return data;
//   }
  const getUser = async (username) => {
    const response = await fetch(`${URL}/User/getCurrentUser`, { 
        method: "Post",
        headers: {
             "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "Username": username,
        })
    })

    const data = await response.json();
  
    return data;
  }

//   const CreateAcc = async (username, password, name) => {

//     const response = await fetch("https://virtualclosetapi.azurewebsites.net/User/AddUser", { 
//         method: "POST",
//         headers: {
//              "Content-Type" : "application/json"
//         },
//         body: JSON.stringify({
//             "Id": 0,
//             "Username": username ,
//             "Password": password,
//             "Name": name
//         })
//     })

//     const data = await response.json();
//     return data;
    
//   }
  
  const CreateAcc = async (username, password, name) => {

    const response = await fetch(`${URL}2/User/AddUser`, { 
        method: "POST",
        headers: {
             "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "Id": 0,
            "Username": username ,
            "Password": password,
            "Name": name
        })
    })

    const data = await response.json();
    return data;
    
  }
  
  
  
  export {LoginAuth, CreateAcc, getUser} 