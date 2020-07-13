document.getElementById("n1").addEventListener("click", (event) => {
  //se guarda en la variable actual el numero que se va ingresando
  let actual = document.getElementById("resultado").innerHTML;
  //sirve para colocar mas de un numero en la operacion antes del operador
  let sumado = document.getElementById("n1").innerHTML;
  //se toma los numeros ingresados en actual y se agregan con suma esto si no hay operador
  document.getElementById("resultado").innerHTML = actual + sumado;
});
document.getElementById("n2").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n2").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;
});
document.getElementById("n3").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n3").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;
});
document.getElementById("n4").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n4").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;
});
document.getElementById("n5").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n5").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;
});
document.getElementById("n6").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n6").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;
});
document.getElementById("n7").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n7").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;
});
document.getElementById("n8").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n8").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;
});
document.getElementById("n9").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n9").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;
});
document.getElementById("n0").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n0").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;
});
document.getElementById("suma").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("suma").innerHTML;
  document.getElementById("resultado").innerHTML = actual + " " + sumado + " ";
});
document.getElementById("resta").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("resta").innerHTML;
  document.getElementById("resultado").innerHTML = actual + " " + sumado + " ";
});
document.getElementById("multi").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("multi").innerHTML;
  document.getElementById("resultado").innerHTML = actual + " " + sumado + " ";
});
document.getElementById("division").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("division").innerHTML;
  document.getElementById("resultado").innerHTML = actual + " " + sumado + " ";
});
document.getElementById("igual").addEventListener("click", (event) => {
  let actual = document.getElementById("resultado").innerHTML;
  let suma = actual.indexOf("+");
  let resta = actual.indexOf("-");
  let multiplicacion = actual.indexOf("×");
  let division = actual.indexOf("÷");
  if (suma !== -1) {
    arr = actual.split("+", 2);
    resp = parseInt(arr[0]) + parseInt(arr[1]);
    document.getElementById("resultado").innerHTML = resp;
  } else if (resta !== -1) {
    arr = actual.split("-", 2);
    resp = parseInt(arr[0]) - parseInt(arr[1]);
    document.getElementById("resultado").innerHTML = resp;
  } else if (multiplicacion !== -1) {
    arr = actual.split("×", 2);
    resp = parseInt(arr[0]) * parseInt(arr[1]);
    document.getElementById("resultado").innerHTML = resp;
  } else if (division !== -1) {
    arr = actual.split("÷", 2);
    resp = parseInt(arr[0]) / parseInt(arr[1]);
    document.getElementById("resultado").innerHTML = resp;
  }
});
