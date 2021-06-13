const menuToggle = document.querySelector('.toggle')
const homePage = document.querySelector('.homePage')

menuToggle.addEventListener('click', () => 
{
    menuToggle.classList.toggle('active')
    homePage.classList.toggle('active')
})