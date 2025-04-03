/* 1.1 */
const btn = document.getElementById('btnToClick')
btn.addEventListener('click', (event) => {
  console.log(event)
})

/* 1.2 */
const focus = document.querySelector('.focus')
focus.addEventListener('focus', () => {
  console.log(focus.value)
})

/* 1.3 */
const input = document.querySelector('.value')
input.addEventListener('input', () => {
  console.log(input.value)
})

/* 1.4 */
const albums = ['De Mysteriis Dom Sathanas', 'Reign of Blood', 'Ride the Lightning', 'Painkiller', 'Iron Fist']
const ul = document.createElement('ul')
for (let i = 0; i < albums.length; i++) {
  const li = document.createElement('li')
  li.textContent = `${albums[i]}`
  ul.appendChild(li)
}
document.body.appendChild(ul)
