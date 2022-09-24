import { menu } from "./menu.js"

// const pageLoad = () => {

const content = document.getElementById('content')

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

const getMenu = document.querySelector('.menu')

getMenu.addEventListener('click', menu)

let img = document.createElement('img')
img.src = "../img/burrito.jpeg"
img.style.width = "50%"

let p = document.createElement('p')
p.textContent = "The finest vegan burritos in all the land."



content.appendChild(img)

content.appendChild(h1).textContent = "Bean's Burritos"

content.appendChild(p)


    


// };

// export { pageLoad }


