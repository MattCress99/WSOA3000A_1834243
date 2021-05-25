const menuToggle = document.querySelector('.toggle')
const events = document.querySelector('.Events')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    events.classList.toggle('active')
})