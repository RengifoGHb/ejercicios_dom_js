/* 1.1 */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')
for (let i = 0; i < countries.length; i++) {
  const li = document.createElement('li')
  li.textContent = `${countries[i]}`
  ul.appendChild(li)
}
document.body.appendChild(ul)

/* 1.2 */
const del_element = document.querySelector('.fn-remove-me')
del_element.remove()

/* 1.3 */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const div = document.querySelector('[data-function="printHere"]')
const ul_div = document.createElement('ul')
for (let i = 0; i < cars.length; i++) {
  const li_div = document.createElement('li')
  li_div.textContent = `${cars[i]}`
  ul_div.appendChild(li_div)
}
div.appendChild(ul_div)

/* 1.4 */
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
for (let i = 0; i < countries2.length; i++) {
  const divs = document.createElement('div')
  divs.className = 'images'
  const h4 = document.createElement('h4')
  const img = document.createElement('img')
  h4.textContent = `${countries2[i].title}`
  img.src = `${countries2[i].imgUrl}`
  divs.appendChild(h4)
  divs.appendChild(img)
  document.body.appendChild(divs)
}

/* 1.5 */
let button = document.createElement('button')
button.textContent = 'Delete'
document.body.appendChild(button)
button.addEventListener('click', () => {
  const divs = document.querySelectorAll('div')
  const last_div = divs[divs.length - 1]
  last_div.remove()
})

/* 1.6 */
const divs_button = document.querySelectorAll('.images')
for (let i = 0; i < divs_button.length; i++) {
  const btn_div = document.createElement('button')
  btn_div.textContent = 'Delete DIV'
  divs_button[i].appendChild(btn_div)
  btn_div.addEventListener('click', () => {
    divs_button[i].remove()
  })
}
