const LoginAuth = async (username, password) => {

    const response = await fetch("http://192.168.4.21:5172/User/Login", { 
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

  const getUser = async (username) => {
    const response = await fetch("http://192.168.4.21:5172/User/getCurrentUser", { 
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

  const CreateAcc = async (username, password, firstName, lastName) => {

    const response = await fetch("http://192.168.4.21:5172/User/AddUser", { 
        method: "POST",
        headers: {
             "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "Id": 0,
            "Username": username ,
            "Password": password,
            "FirstName": firstName,
            "LastName": lastName
        })
    })

    const data = await response.json();
    return data;
    
  }
  
  
  
  export {LoginAuth, CreateAcc, getUser} 