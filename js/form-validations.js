// pendientes
// fijar nav
// colapsar nav
// escribir nombre
// animaciones
// hovers
// pdf con curriculum

// validación
const fields_input = document.querySelectorAll(".formcontato__input");
const submitButton = document.getElementById("submit_button");

function formValidation(e){
    const field = e.target.id;
    const value = e.target.value;
    const box = e.target.labels[0];
    const fieldError = e.target.nextElementSibling;
    const message = makeMessageError(field, value);
    if(message){
        fieldError.innerHTML = message
        box.classList.add("field_wrong")
        e.target.dataset.valid = false;
        checkAllFields(); // chequear todos los campos y habilitar/desabilitar botón submit
    } else {
        fieldError.innerHTML = ""
        box.classList.remove("field_wrong")
        e.target.dataset.valid = true;
        checkAllFields(); // chequear todos los campos y habilitar/desabilitar botón submit
    }
}

function makeMessageError(field, value){
    let message;
    const emailRegEx= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(value.length === 0) { message = "*El campo no puede quedar vacío"} // empty
    if(field !== "message" && value.length > 50){message = "*Superó los 50 caracteres"} // name & email & subject > 50 caracteres
    if(field === "message" && value.length > 300){message = "*Superó los 300 caracteres"} // message > 300
    if(field === "email" && !emailRegEx.test(value)){message = "*Ingrese un email válido"} // email
    return message
}

function checkAllFields(){
    let valid = true;
    fields_input.forEach( element => element.dataset.valid === "false"? valid = false: "");
    console.log("data-valid", valid)
    valid === true? submitButton.disabled = false: submitButton.disabled = true;
}

fields_input.forEach( element => element.addEventListener("input", formValidation));