// Select all input elements for varification
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAdress = document.getElementById("emailAdress");
const password = document.getElementById("password");

const firstNameContainer = document.getElementById("firstNameContainer");
const lastNameContainer = document.getElementById("lastNameContainer");
const emailAdressContainer = document.getElementById("emailAdressContainer");
const passwordContainer = document.getElementById("passwordContainer");

// function for form varification
function formValidation(e) {
    let isValid = true;
    
    // checking First Name length
  if (firstName.value.length == 0) {
    setErrorState(firstName, firstNameContainer);
    isValid = false;
  } else {
    setValidState(firstName, firstNameContainer);    
  }
  // checking Last Name length
  if (lastName.value.length == 0) {
    setErrorState(lastName, lastNameContainer);
    isValid = false;
  } else {
    setValidState(lastName, lastNameContainer); 
  }

  // checking emailAdress
  const mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if ( !emailAdress.value.match(mailformat) ) {
    setErrorState(emailAdress, emailAdressContainer);    
    isValid = false;
  } else {
    setValidState(emailAdress, emailAdressContainer);
  }
  
  // checking password
  if (!password.value.match(/^.{8,16}$/)) {
    setErrorState(password, passwordContainer);
    isValid = false;
  } else {
    setValidState(password, passwordContainer);
  }


  return isValid;
}

function setErrorState(element, elementContainer) {
    element.classList.add("error");
    elementContainer.children[1].classList.remove('displayNone');
    elementContainer.children[2].classList.remove('displayNone');
}
function setValidState(element, elementContainer) {
    element.classList.remove("error");
    elementContainer.children[1].classList.add('displayNone');
    elementContainer.children[2].classList.add('displayNone');
}
