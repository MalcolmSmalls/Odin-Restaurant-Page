(()=>{"use strict";const e=document.getElementById("content"),n=document.createElement("h1"),t=document.createElement("header");t.innerHTML='\n    <nav>\n        <ul>\n            <li class="home">Home</li>\n            <li class="menu">Menu</li>\n            <li class="contact">Contact</li>\n        </ul>\n    </nav>\n',e.appendChild(t),document.querySelector(".menu").addEventListener("click",(()=>{const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("h1");e.appendChild(n).textContent="Bean's Burritos Menu"}));let l=document.createElement("img");l.src="../img/burrito.jpeg",l.style.width="50%";let c=document.createElement("p");c.textContent="The finest vegan burritos in all the land.",e.appendChild(l),e.appendChild(n).textContent="Bean's Burritos",e.appendChild(c)})();