const menuToggle = document.querySelector('.toggle')
const musicPage = document.querySelector('.musicPage')

menuToggle.addEventListener('click', () => 
{
    menuToggle.classList.toggle('active')
    musicPage.classList.toggle('active')
})