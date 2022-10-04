let anyOperator = ""
let contador = ""
let varAuxiliar = ""
let numero = document.querySelectorAll(".digito")
let operador = document.querySelectorAll(".operador")



/* validación de los botones numericos */


numero.forEach((item) => {
  item.addEventListener('click', () => validar(item.id))
}
)

function validar(numero) {
  contador += numero
  document.getElementById("digito").innerHTML = contador
}

/* validacion de los operadores */

operador.forEach((item) => {
  item.addEventListener('click', () => validarOperador(item.id))
}
)

validarOperador = (operador) => {
  anyOperator = operador
  varAuxiliar = contador
  document.getElementById("operadores").innerHTML = anyOperator
  contador = ""
}

/* la operacion en si */

function submit() {
  if (anyOperator === "+") {
    contador = Number(varAuxiliar) + Number(contador)
    document.getElementById("digito").innerHTML = contador
    document.getElementById("operadores").innerHTML = ""
  }
  else if (anyOperator === "-") {
    contador = Number(varAuxiliar) - Number(contador)
    document.getElementById("digito").innerHTML = contador
    document.getElementById("operadores").innerHTML = ""
  }

  else if (anyOperator === "*") {
    contador = Number(contador) * Number(varAuxiliar)
    document.getElementById("digito").innerHTML = contador
    document.getElementById("operadores").innerHTML = ""
  }

  else if (anyOperator === "/") {
    contador = Number(varAuxiliar) / Number(contador)
    document.getElementById("digito").innerHTML = contador
    document.getElementById("operadores").innerHTML = ""
  }
  else {
    contador = ((varAuxiliar * contador) / (100))
    document.getElementById("digito").innerHTML = contador
    document.getElementById("operadores").innerHTML = ""
  }
}


/* uno para borrar */

del = () => {
  if (contador.length > 0)
    contador = contador.slice(0, -1)
    document.getElementById("digito").innerHTML = contador
}

invertir = () => {
  contador *= -1
  document.getElementById("digito").innerHTML = contador
}