const personsName = document.getElementById("name")
const form = document.getElementById("form")
const email = document.getElementById("email")
const phone = document.getElementById("phone")

let specialChars = /[^a-zA-Z ]/g ;
let letter = /[a-zA-Z]/;

// let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; doesnt work
let regexEmail = /\S+@\S+\.\S+/;
let regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
// regex stands for regular string

const backToTop = document.getElementById("back_To_Top")

backToTop.addEventListener("click" , function(){
    window.scrollTo(0, 0);
});





form.addEventListener("submit", validateRegisterForm);

function validateRegisterForm (e){
    e.preventDefault();

    let errors = [];

    if(personsName.value == ""){
        document.getElementById("personName").setAttribute("data-error" , "Required Field");
        document.querySelectorAll('.form_Error[data-error] input[type="text"]').forEach(inpEl => {
        inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'));
            })
        errors.push("a");
        }
        else if (!regexName.test(personsName.value)){
            document.getElementById("personName").setAttribute("data-error" , "Please enter a valid name");
            document.querySelectorAll('.form_Error[data-error] input[type="text"]').forEach(inpEl => {
            inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'));
            })
            errors.push("b");
        }
    if(phone.value == ""){
        document.getElementById("personPhone").setAttribute("data-error" , "Required Field");
        document.querySelectorAll('.form_Error[data-error] input[type="tel"]').forEach(inpEl => {
        inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'));
            })
        errors.push("b");
        }else if (!regexPhone.test(phone.value)){
            document.getElementById("personPhone").setAttribute("data-error" , "Please enter a valid phone number e.g xxx-xxx-xxxx");
            document.querySelectorAll('.form_Error[data-error] input[type="tel"]').forEach(inpEl => {
            inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'));
            })
            errors.push("b");
        }
    if(email.value == ""){
        document.getElementById("personEmail").setAttribute("data-error" , "Required Field");
        document.querySelectorAll('.form_Error[data-error] input[type="text"]').forEach(inpEl => {
        inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'));
            })
        errors.push("c");
    }
        // }else if (!regexEmail.test(personEmail.value)){
        //     document.getElementById("personEmail").setAttribute("data-error" , "Please enter a valid email address");
        //     document.querySelectorAll('.form_Error[data-error] input[type="text"]').forEach(inpEl => {
        //     inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'));
        //     })
        //     errors.push("c");
        // }
        if(errors.length > 0) {
           
            return false;
        }
            alert("submitted");
            return true;
            
    }

   




   