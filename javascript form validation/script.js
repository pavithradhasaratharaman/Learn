 const form   =document.getElementById("form");
 const username=document.getElementById("userName");
 const email=document.getElementById("Email");
 const password=document.getElementById("Password");
 const password2=document.getElementById("Confirm Password");

 String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}; 
String.prototype.isAlpha=function(){
    return!! this.match(/^[a-zA-Z]*$/);
}
function checkRequired(inputs){
    inputs.forEach(input=>{
        if(input.value.trim()==""){
           errorInput(input,`${getName(input)} is required`);
        }
        else{
            successInput(input);
        }
    });
}
function getName(input){
    return input.id;
}

function errorInput(input,message){
    const formGroup=input.parentElement;
    formGroup.className="form-group error";
    const p=formGroup.querySelector("p");
  p.innerHTML=message;

}
function successInput(input){
  const formGroup=input.parentElement;
  formGroup.className="form-group success";
  const p=formGroup.querySelector("p");
  p.innerHTML="";
}
function checkLength(input,min,max){
    const data=input.value.trim().length;
    if(data<min){
        errorInput(input,`${getName(input)} must be atleast greater ${min} characters`);

    }
    else if(data>max){
        errorInput(input,`${getName(input)} must be atleast lesser ${max} characters`);
    }
    else{
         successInput(input);
    }
}
function checkConfirmPassword(password,password2){
    if(password.value != password2.value){
        errorInput(password2,`${getName(password2)} doesn't match`);
    }
}
function checkEmail(input){
    if(!input.value.trim().isEmail()){
        errorInput(input,`This is not a valid email address`); 
    }
}
function checkAlpha(input){
    if(!input.value.trim().isAlpha()){
        errorInput(input,`${getName(input)} must be in  alphabets`); 
    }
}
 form.addEventListener("submit",function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,4,25);
    checkLength(password,5,10);
    checkConfirmPassword(password,password2);
    checkEmail(email);
    checkAlpha(username)
    
 })