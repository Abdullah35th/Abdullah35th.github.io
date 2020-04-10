function validateForm(){
  let name = document.getElementById("firstName").value;
  if(name === ""){
    alert("Please type in your first name");
    return false;
}
let lastname = document.getElementById("lastName").value;
if(lastname === ""){
  alert("Please type in your last name");
  return false;
}
let phoneNumber = document.getElementById("phone").value;
if(phoneNumber === ""){
  alert("Please enter your phone number ");
  return false;
}
}
