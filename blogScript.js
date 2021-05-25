const menuToggle = document.querySelector('.toggle')
const blogPost = document.querySelector('.blogPost')
const BackgroundVideo = document.querySelector('.backgroundVideo')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    blogPost.classList.toggle('active')
    BackgroundVideo.classList.toggle('active')
    })