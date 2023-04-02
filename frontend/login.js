


     // form tag
     let form = document.querySelector("form")

    // input fields
    let emailInp = document.getElementById("username");
    let passwordInp = document.getElementById("password");
    let loginBtn = document.getElementById("btn")

// let url = "http://localhost:8000/"

//    form.addEventListener("submit",async(e)=>{
//        e.preventDefault();
//         let user = {
//             email : emailInp.value,
//             password : passwordInp.value
        
//         }
//        console.log(user)
//         let res = await fetch(`${url}users/login`,{
//             method:"POST",
//             headers:{
//                 "Content-type":"application/json"
//             },
//             body:JSON.stringify(user)
//         })
//         let data = await res.json();
//         console.log(data);
//         window.location.href="./index.html"
        
//    })



//    localStorage 

let UserData = JSON.parse(localStorage.getItem("user-data"));

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let userName = form.username.value;
    let password = form.password.value;
   let filtered = UserData.filter((el)=>{
    if(userName == el.name){
        if(password == el.password){
            alert("Sign in Seccessful");
            window.location.href="./index.html"
        }else{
            alert("Password Invalid");
        }
    }else{
      alert("Username Invalid")
    }
   })

})