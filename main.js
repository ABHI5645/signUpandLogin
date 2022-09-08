const DB_USERS=[];
const resetSignUpFields=()=>{
   document.getElementById('first-name').value=" ";
   document.getElementById('last-name').value=" ";
   document.getElementById('email').value=" ";
   document.getElementById('password').value="";
   document.getElementById('mobile-number').value=" "
   document.getElementById("confirm-password").value=""
   document.getElementById('tnC').checked = false
}
const signup=()=>{
    let firstNameInput=document.getElementById("first-name").value;
    let lastNameInput=document.getElementById("last-name").value;
    let emailInput=document.getElementById("email").value;
    let passwordInput=document.getElementById("password").value;
    let numberInput=document.getElementById("mobile-number").value;
    let confirmPasswordInput=document.getElementById("confirm-password").value;

    let error=false; 
    if(firstNameInput.length>=3){
        document.getElementById("first-name-valid").style.display="block";
        document.getElementById("first-name-invalid").style.display="none";

    }
    else{
        document.getElementById("first-name-valid").style.display="none";
        document.getElementById("first-name-invalid").style.display="block";
        error=true;
    }
    if(lastNameInput.length>=3){
        document.getElementById("last-name-valid").style.display="block";
        document.getElementById("last-name-invalid").style.display="none";
        
    }
    else{
        document.getElementById("last-name-valid").style.display="none";
        document.getElementById("last-name-invalid").style.display="block";
        error=true;
    }
    if(emailInput &&
        emailInput.includes("@") &&
        emailInput.includes(".") &&
        emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
            emailInput.indexOf('@') !== 0 
            ){
                document.getElementById("email-valid").style.display = "block";
                document.getElementById("email-invalid").style.display = "none";
    }
    else{
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
        error=true;
    }
    if(passwordInput && passwordInput.length>=6){
        document.getElementById("password-valid").style.display="block";
        document.getElementById("password-invalid").style.display="none";
    }
    else{
        document.getElementById("password-invalid").style.display="block";
        document.getElementById("password-valid").style.display="none";
        error=true;
    }
    if(numberInput && numberInput.length==10 && parseInt(numberInput)){
        document.getElementById("number-valid").style.display="block";
        document.getElementById("number-invalid").style.display="none";
    }
    else{
        document.getElementById("number-valid").style.display="none";
        document.getElementById("number-invalid").style.display="block";
        error=true;
    }
    if( confirmPasswordInput && confirmPasswordInput==passwordInput ){
        document.getElementById("confirm-password-valid").style.display="block";
        document.getElementById("confirm-password-invalid").style.display="none";
    }
    else{
        document.getElementById("confirm-password-valid").style.display="none";
        document.getElementById("confirm-password-invalid").style.display="block";
        error=true;
    }
   
    if(!error){
        alert("Your details have been saved successfully")
        
        resetSignUpFields();
        document.getElementById("first-name-valid").style.display="none";
        document.getElementById("last-name-valid").style.display="none";
        document.getElementById("email-valid").style.display = "none";
        document.getElementById("password-valid").style.display="none";
        document.getElementById("confirm-password-valid").style.display="none";
        document.getElementById("number-valid").style.display="none";
        let userDetails={
            firstNameInput,
            lastNameInput,
            emailInput,
            passwordInput,
            numberInput,
            
        }
        DB_USERS.push(userDetails);
        console.log(userDetails);
    }


    
   
 
    
}
const resetLoginFields=function(){
   document.getElementById("login-email").value=" ";
document.getElementById("login-password").value="";
}
const login=() =>{
    let enteredEmail=document.getElementById("login-email").value;
    let enteredPassword=document.getElementById("login-password").value;
    let currentUser=DB_USERS.find((element)=>{
        return element.emailInput===enteredEmail;
    });
    try{
        if(currentUser.passwordInput===enteredPassword){
            alert("Successfuly logged in")
        }
        else{
            alert("Wrong Password")
        }
    }
    catch{
        alert("Wrong details")
    }
    




    resetLoginFields();
}


































// function validate(){
//     let firstNameInput=document.getElementById("first-name");
//     let lastNameInput=document.getElementById("last-name").value;
//     let emailInput=document.getElementById("email").value;
//     let passwordInput=document.getElementById("password").value;
//     let numberInput=document.getElementById("mobile-number").value;
//     let confirmPasswordInput=document.getElementById("confirm-password").value;
//     let error=false; 
//     if(firstNameInput.value){
//         document.getElementById("first-name-valid").style.display="block";
//         document.getElementById("first-name-invalid").style.display="none";

//     }
//     else{
//         document.getElementById("first-name-valid").style.display="none";
//         document.getElementById("first-name-invalid").style.display="block";
//         error=true;
//     }
//     if(lastNameInput){
//         document.getElementById("last-name-valid").style.display="block";
//         document.getElementById("last-name-invalid").style.display="none";
//         error=true;
//     }
//     else{
//         document.getElementById("last-name-valid").style.display="none";
//         document.getElementById("last-name-invalid").style.display="block";
//         error=true;
//     }
//     if(   emailInput &&
//         emailInput.includes("@") &&
//         emailInput.includes(".") &&
//         emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
//             emailInput.indexOf('@') !== 0 
//             ){
//                 document.getElementById("email-valid").style.display = "block";
//                 document.getElementById("email-invalid").style.display = "none";
//     }
//     else{
//         document.getElementById("email-invalid").style.display = "block";
//         document.getElementById("email-valid").style.display = "none";
//         error=true;
//     }
//     if(passwordInput && passwordInput.length>=6){
//         document.getElementById("password-valid").style.display="block";
//         document.getElementById("password-invalid").style.display="none";
//     }
//     else{
//         document.getElementById("password-invalid").style.display="block";
//         document.getElementById("password-valid").style.display="none";
//         error=true;
//     }
//     if(numberInput && numberInput.length==10 && parseInt(numberInput)){
//         document.getElementById("number-valid").style.display="block";
//         document.getElementById("number-invalid").style.display="none";
//     }
//     else{
//         document.getElementById("number-valid").style.display="none";
//         document.getElementById("number-invalid").style.display="block";
//         error=true;
//     }
//     if( confirmPasswordInput && confirmPasswordInput==passwordInput ){
//         document.getElementById("confirm-password-valid").style.display="block";
//         document.getElementById("confirm-password-invalid").style.display="none";
//     }
//     else{
//         document.getElementById("confirm-password-valid").style.display="none";
//         document.getElementById("confirm-password-invalid").style.display="block";
//         error=true;
//     }
//     if(!error){
        
//     }
// }

// function myFunction() {
//     var x = document.getElementById("password");
//     if (x.type === "password") {
//       x.type = "text";
//       document.getElementById("confirm-password").type = "text";

//     } else {
//       x.type = "password";
//       document.getElementById("confirm-password").type = "password";
//       console.log(document.getElementById("confirm-password").type);
//     }
//   }


