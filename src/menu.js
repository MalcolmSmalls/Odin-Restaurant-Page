import { contact } from "./contact.js"
import { pageLoad } from "./pageload.js"


const menu = () => {
    const content = document.getElementById('content')

    content.innerHTML = ""

    const h1 = document.createElement('h1')

    const header = document.createElement('header')



    header.innerHTML = `
        <nav>
            <ul>
                <li class="home">Home</li>
                <li class="menu">Menu</li>
                <li class="contact">Contact</li>
            </ul>
        </nav>
    `
    content.appendChild(header)

    content.appendChild(h1).textContent = "Bean's Burritos Menu"

    const getContact = document.querySelector('.contact')
    const getHome = document.querySelector('.home')


    getContact.addEventListener('click', contact)
    getHome.addEventListener('click',pageLoad)













}

export { menu }