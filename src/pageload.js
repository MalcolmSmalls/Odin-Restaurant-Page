// const pageLoad = () => {

const content = document.getElementById('content')

const h1 = document.createElement('h1')

let img = document.createElement('img')
img.src = "../img/burrito.jpeg"
img.style.width = "50%"

let p = document.createElement('p')
p.textContent = "The finest vegan burritos in all the land."



content.appendChild(img)

content.appendChild(p)


content.appendChild(h1).textContent = "Bean's Burritos"
    


// };

// export { pageLoad }


