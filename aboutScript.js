const menuToggle = document.querySelector('.toggle')
const aboutMe = document.querySelector('.aboutMe')


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    aboutMe.classList.toggle('active')
})