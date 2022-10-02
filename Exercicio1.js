//Programa para testar quais e quantos computadores 
//estão ligados e desligados

//entradas
let comput1 = Number(prompt("Digite 1/ligado e 0/desligado"))
let comput2 = Number(prompt("Digite 1/ligado e 0/desligado"))
let comput3 = Number(prompt("Digite 1/ligado e 0/desligado"))
let ligado = 0
let desligado = 0

//Teste para verificar se o computador esta ligado
if (comput1 == 0) {
  console.log("Computador 1: Desligado")
}
else {
  console.log("Computador 1: Ligado")
}
if (comput2 == 0) {
  console.log("Computador 2: Desligado")
}
else {
  console.log("Computador 2: Ligado")
}
if (comput3 == 0) {
  console.log("Computador 3: Desligado")
}
else {
  console.log("Computador 3: Ligado")
}

//Teste: Se o computador estiver ligado, acrescenta 1 "Ligado"
// e se estiver desligado acrescenta 1 "Desligado"
if (comput1 === 1) { ligado++ }
else { desligado++ }
if (comput2 === 1) { ligado++ }
else { desligado++ }
if (comput3 === 1) { ligado++ }
else { desligado++ }


//Saida indicando a quantidade de computadores desligados
console.log(`Computadores Ligados: ${ligado}`)
console.log(`Computadores Desligados: ${desligado}`)