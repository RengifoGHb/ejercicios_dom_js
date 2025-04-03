/* 2.1 */
let dinamic_div = document.createElement('div')
dinamic_div.id = 'New_div'
document.body.appendChild(dinamic_div)

/* 2.2 */
let dinamic_div_2 = document.createElement('div')
dinamic_div_2.id = 'New_div_2'
dinamic_div_2.innerHTML = '<p>Hola</p>'
document.body.appendChild(dinamic_div_2)

/* 2.3 */
let loop_div = document.createElement('div')
loop_div.id = 'Loop_div'

for (let i = 1; i <= 6; i++) {
  let p = document.createElement('p')
  p.textContent = `${i}`
  loop_div.appendChild(p)
}

document.body.appendChild(loop_div)

/* 2.4 */
const p_soy_dinamico = document.createElement('p')
p_soy_dinamico.textContent = 'Soy dinámico!'
document.body.appendChild(p_soy_dinamico)

/* 2.5 */
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

/* 2.6 */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
let ul = document.createElement('ul')
for (let i = 0; i < apps.length; i++) {
  let li = document.createElement('li')
  li.textContent = `${apps[i]}`
  ul.appendChild(li)
}

document.body.appendChild(ul)

/* 2.7 */
let rem_me = document.querySelectorAll('.fn-remove-me')
rem_me.forEach((elemento) => elemento.remove())

/* 2.8 */
let div = document.querySelectorAll('div')
const p_add = document.createElement('p')
p_add.textContent = 'Voy en medio!'
div[0].insertAdjacentElement('afterend', p_add)

/* 2.9 */
let divs = document.querySelectorAll('div.fn-insert-here')
for (let i = 0; i < divs.length; i++) {
  const p_div = document.createElement('p')
  p_div.textContent = 'Voy dentro!'
  divs[i].appendChild(p_div)
}
