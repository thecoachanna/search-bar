const search = document.querySelector('.search')
const button = document.querySelector('.btn')
const input = document.querySelector('.input')

    .addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})