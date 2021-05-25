const menuToggle = document.querySelector('.toggle')
const contact = document.querySelector('.contactUs')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    contact.classList.toggle('active')
    })