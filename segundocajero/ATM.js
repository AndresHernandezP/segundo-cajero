let counts = [
    {
        "name": "Mali",
        "money": 200,
        "password": 1919
    },
    {
        "name": "Gera",
        "money": 279,
        "password": 8277
    },
    {
        "name": "Maui",
        "money": 87,
        "password": 6112
    },
    {
        "name": "Amador",
        "money": 120,
        "password": 7691
    },
    {
        "name": "Gerardo",
        "money": 920,
        "password": 9352
    },
    {
        "name": "Judy",
        "money": 490,
        "password": 4808
    }
];
let newFounds = null
let user = null
const form = document.getElementById("formulario")
let users = document.querySelector("select")
let validar = document.querySelector(".validar")
const newUser = document.querySelector(".create")
let valueChange = document.getElementById("ninguno")


users.addEventListener('change', displayPassword)
validar.addEventListener('click', verifyPassword)
newUser.addEventListener('click', createNewUser)

//Función para desplegar la validacón de la contraseña

function displayPassword() {

    if (users.value === 'Selecciona tu usuario') {
        document.getElementById("passwords").style.display = "none";
    }
    else if (users.value === "Ninguno de los anteriores") {
        document.getElementById("nuevoUsuario").style.display = "flex";
        document.getElementById("passwords").style.display = "none";
    }
    else {
        document.getElementById("passwords").style.display = "flex";
        document.getElementById("nuevoUsuario").style.display = "none";
    }
}

// Función para desplegar la pagina de movimientos

function displayMovements() {
    document.getElementById("title").innerHTML = ""
    document.getElementById("formulario").innerHTML = document.getElementById("movimientos").innerHTML
    document.getElementById("passwords").innerHTML = document.getElementById("movimientos2").innerHTML
}

// función para crear un nuevo usuario

function createNewUser() {
    document.getElementById("nuevoUsuario").style.display = "none";
    lastUser = document.getElementById("select")
    let newOption = document.createElement("option");
    newOption.text = document.getElementById("newUser").value;
    document.getElementById("ninguno").innerHTML = newOption.textContent
    valueChange.value = 6
    newFounds = Number(document.getElementById("newFounds").value)
    if (newFounds < 991 && newFounds > 9) {
        nuevoUsuario = {
            "name": newOption.textContent,
            "money": Number(document.getElementById("newFounds").value),
            "password": Number(document.getElementById("newPassword").value),
        }
        counts.push(nuevoUsuario)
    }
    else {
        alert('recuerada que solo puedes ingresar entre 10 y 990 pesoss')
        window.location.reload()
    }
}

// Función para verificar la contraseña

function verifyPassword() {
    user = users.value
    password = Number(document.getElementById("password").value)
    if (password == counts[user].password) {
        displayMovements()
    }
    else {
        document.getElementById("title").innerHTML = "Contraseña incorrecta, intenta otra vez. "
    }
}

//función para desplegar la verificación de los fondos 

function verifyFounds() {
    document.getElementById("title").innerHTML = ""
    document.getElementById("formulario").innerHTML = ` Cuentas con  ${counts[user].money}  pesos en tu cuenta`
    document.getElementById("passwords").innerHTML = document.getElementById("return").innerHTML
}

// Funciones para Ingresar fondos

function addFoundsDisplay() {
    document.getElementById("title").innerHTML = document.getElementById("addup").innerHTML
    document.getElementById("formulario").innerHTML = ` Cuentas con  ${counts[user].money}  pesos en tu cuenta <br> Recuerda que no puedes tener mas de 990 pesos en tu cuenta`
    document.getElementById("passwords").innerHTML = document.getElementById("return").innerHTML
}

function addFounds() {
    let addUp = document.getElementById("addFounds").value
    if ((counts[user].money) + Number(addUp) < 991) {
        counts[user].money += Number(addUp)
        document.getElementById("title").innerHTML += `<div> se han agregado ${addUp} pesos a tu cuenta. Saldo actual ${counts[user].money} </div>`
    }
    else {
        document.getElementById("title").innerHTML += `<div> Recuerda que no puedes tener mas de 990 pesos en tu cuenta </div>`
    }
}

// Funciones para Retirar fondos

function takeFoundsDisplay() {
    document.getElementById("title").innerHTML = document.getElementById("take").innerHTML
    document.getElementById("formulario").innerHTML = ` Cuentas con  ${counts[user].money}  pesos en tu cuenta <br> Recuerda que no puedes tener menos de 10 pesos en tu cuenta`
    document.getElementById("passwords").innerHTML = document.getElementById("return").innerHTML
}

function takeFounds() {
    let take = document.getElementById("takeFounds").value
    if ((counts[user].money) - Number(take) > 10) {
        counts[user].money -= Number(take)
        document.getElementById("title").innerHTML += `<div> se han retirado ${take} pesos a tu cuenta. Saldo actual ${counts[user].money} </div>`
    }
    else {
        document.getElementById("title").innerHTML += `<div> Recuerda que no puedes tener menos de 10 pesos en tu cuenta </div>`
    }
}
