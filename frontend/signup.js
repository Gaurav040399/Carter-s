let usernameEl = document.getElementById("username")
let emailEl = document.getElementById("mail")
let passwordEl = document.getElementById("password")
let locationEl = document.getElementById("Last_name");

let formEl = document.querySelector("form");

// let url = "http://localhost:8000/"

// formEl.addEventListener("submit",async(e)=>{
//     e.preventDefault();
//     let user = {
//         name: usernameEl.value,
//         email: emailEl.value,
//         password: passwordEl.value,
//         location : locationEl.value
//     }
//     console.log(user)
//    let res = await fetch(`http://localhost:8000/users/register`,{
//         method:"POST",
//         headers:{
//             "Content-type":"application/json"
//         },
//         body:JSON.stringify(user)
//     })
//     let data = await res.json()
//     console.log(data)
//     window.location.href="./login.html"

// })



    // localstorage 

    let UserData = JSON.parse(localStorage.getItem("user-data")) || [];

    formEl.addEventListener("submit",(e)=>{
        e.preventDefault();
        let data = {
            name: usernameEl.value,
        email: emailEl.value,
        password: passwordEl.value,
        location : locationEl.value
        }
        UserData.push(data)
        console.log(UserData)
        localStorage.setItem("user-data",JSON.stringify(UserData))
        // formEl.Name.value = "" ;
        // formEl.Last_name.value = "";
        // formEl.mail.value = "";
        // formEl.username.value = "";
        // formEl.password.value = "";
        alert("Sign Up Seccussful")
        window.location.href="./login.html"
    })

