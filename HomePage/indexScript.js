const menuToggle = document.querySelector('.toggle')
const mainPage = document.querySelector('.homePage, .Events, .contactUs, .blogPost, .aboutMe, .musicPage')

menuToggle.addEventListener('click', () => 
{
    menuToggle.classList.toggle('active')
    mainPage.classList.toggle('active')
})