 const authApi = 'https://movspot.herokuapp.com/'

export const signup = (user) =>{

    return fetch(`${authApi}/api/auth/signup`,{
  method:"POST",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"
  },
  body:JSON.stringify(user)
})

}

export const signin = (user) =>{

    return fetch(`${authApi}/api/auth/signin`,{
  method:"POST",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"
  },
  body:JSON.stringify(user)
})

}