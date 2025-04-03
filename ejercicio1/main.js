/* 1.1 */
const button = document.querySelector('.showme')
console.log(button)

/* 1.2 */
const h1_pillado = document.querySelector('#pillado')
console.log(h1_pillado)

/* 1.3 */
let All_p = document.querySelectorAll('p')
All_p.forEach((p) => {
  console.log(p.textContent)
})

/* 1.4 */
let All_pokemon = document.querySelectorAll('.pokemon')
All_pokemon.forEach((pokemon) => {
  console.log(pokemon.textContent)
})

/* 1.5 */
let testMe = document.querySelectorAll('[data-function="testMe"]')
testMe.forEach((element) => {
  console.log(element.textContent)
})

/* 1.6 */
console.log(testMe[2].textContent)
