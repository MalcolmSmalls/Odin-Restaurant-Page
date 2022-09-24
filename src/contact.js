import { menu } from "./menu.js"
import { pageLoad } from "./pageload.js"



const contact = () => {
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

    content.appendChild(h1).textContent = "Contact Bean's Burritos"




    const getHome = document.querySelector('.home')
    const getMenu = document.querySelector('.menu')

    getMenu.addEventListener('click', menu)
    getHome.addEventListener('click',pageLoad)








}

export { contact }