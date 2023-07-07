const navBtn = document.querySelector('.nav__btn')
const navMenu = document.querySelector('.nav__links')
const navOverlay = document.querySelector('.nav__overlay')

const handleNav = () => {
	navMenu.classList.toggle('active')
	navBtn.classList.toggle('active')
	navOverlay.classList.toggle('active')
}

navBtn.addEventListener('click', handleNav)
