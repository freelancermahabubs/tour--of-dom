// 1. Where to add
const placesList = document.getElementById('places-list');
// 2. What to be added 
const li = document.createElement('li');
li.innerText = "Phartoli Ban"
// 3. add the child
placesList.appendChild(li);

// 1. Where do add
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);
// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = "Birayani";
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = "Kacci";
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = "Salat";
ul.appendChild(li3)

section.appendChild(ul);
mainContainer.appendChild(section);

// set inner HTML directly

const sectionDrees = document.createElement('section');
sectionDrees.innerHTML = `
<h1>My Dress Section</h1>
<ul>
  <li>T-Shirt</li>
  <li>Lungi</li>
  <li>Sando Genji</li>
</ul>
`
mainContainer.appendChild(sectionDrees);