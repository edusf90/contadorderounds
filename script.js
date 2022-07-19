const contadorHtml = document.getElementById('contador')

let contadorNumero = 0
function contar() {
  contadorNumero = contadorNumero + 1
  document.getElementById('contador').innerHTML = contadorNumero

  console.log(contadorNumero)
}

function diminiuir() {
  if (contadorNumero <= 0) {
    contadorNumero = 0
  } else {
    contadorNumero = contadorNumero - 1
  }
  document.getElementById('contador').innerHTML = contadorNumero
}

function Resetar() {
  contadorNumero = 0
  document.getElementById('contador').innerHTML = contadorNumero
}
