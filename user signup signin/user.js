var form = document.querySelector("#form1");
form.addEventListener("submit",onSignUp);
document.querySelector("#click").addEventListener("click",onclickdo)
var dataArr=JSON.parse(localStorage.getItem("userData"));
  function onSignUp(){
      event.preventDefault()
      var data={
          email:form.email.value,
          pass:form.pass.value,
          passcon:form.passcon.value,
      }
      if(dataArr==null){
      if(data.email!=="" && data.pass!=="" && data.passcon!==""){
      if(data.pass===data.passcon){
          if(data.pass.length>=8){
          localStorage.setItem("userData",JSON.stringify(data))
          alert("Account Created Seccussfully. Now, signIn to proceed");
          window.location.reload();
        }else{
            alert("Password must contain 8 character's")
        }
        }else{
          alert("Password Does not Match");
        }
        document.querySelector("#form1").reset()
        }else{
        alert("Fill All The Details First")
    }
}else{
    alert("An Account Already Exist");
    window.location.reload();
}
}


  function onclickdo(){
    window.location.href="../index.html";
  }


//   -----------------------------------------for signin
  var userData = JSON.parse(localStorage.getItem("userData"));
    var form2 = document.querySelector("#form2");
    form2.addEventListener("submit",checkData)
    function checkData(){
        event.preventDefault();
        var data={
            email:form2.emailS.value,
            pass:form2.passS.value,
        }
        if(userData===null){
            alert("Create an account")
        }else if(userData.email===data.email && userData.pass===data.pass){
            alert("Login Successful")
            // link the home page here
            window.location.href="../cartpage.html";
        }else if(userData.email!==data.email){
            alert("User Does Not Exist")
        }else if(userData.pass!==data.pass){
            alert("Wrong Password")
        }
        document.querySelector("#form2").reset()
    }
    function forgotPassFun(event){
       var result = prompt("Confirm Your Email");
       if(result===dataArr.email){
           var confir =confirm("Are You Sure You Want to Change Your Password");
           if(confir){
         var newpass = prompt("Enter Your New Password");
            alert("Password Changed Seccessfully");
            freshData={
                email: dataArr.email,
                pass: newpass || dataArr.pass,
                passcon: newpass || dataArr.pass,
    
            }
            
            localStorage.setItem("userData",JSON.stringify(freshData))
            window.location.reload();
        }
       }else{
           alert("Email Doesn't Match")
           localStorage.setItem("userData",JSON.stringify(dataArr))
       }
    }