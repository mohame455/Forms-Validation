const Input = document.getElementsByClassName("InputForm");
console.log(Input);
const Send = document.getElementById("send");
Send.addEventListener('click', SubmitData);

function ValidForm(field, regex) {
    if (regex.test(field.value) === false) {
        alert(`your ${field.placeholder} is invalid`)
    }
}

let regEmail = /^[a-zA-Z0-9]+@[a-z]{2,}\.[a-z]{2,4}/;
let regPassword = /^[a-z0-9]{7,}[A-Z]{1,}$/;

function SubmitData(event) {
    let isValid = false
    for (let i = 0; i < Input.length; i++) {
        if (Input[i].value == "") {
            alert(`please insert your ${Input[i].placeholder}`)
        } else if (Input[i].name == "email") {
            ValidForm(Input[i], regEmail)
        } else if (Input[i].name == "password") {
            ValidForm(Input[i], regPassword);
        } else isValid = true
    }
    if (isValid) {
        alert("success")
    }
}

const Reset = document.getElementById("reset");
Reset.addEventListener('click', ResetData);

function ResetData(event) {
    for (let i = 0; i < Input.length; i++) {
        Input[i].value = ""
    }
}