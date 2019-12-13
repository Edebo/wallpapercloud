 //const authApi = "localhost 9000"

 export const signup = (user) => {
console.log(user)
    return fetch("http://localhost:9000/api/user/signup",{
  method:"POST",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
Email:user.email,
Password:user.password
  })
  
}).then(response =>response.json())

}

export const signin = user =>{

    return fetch("http://localhost:9000/api/user/signin",{
  method:"POST",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    Email:user.email,
    Password:user.password
      })
      .then(response =>response.json())
    })


}