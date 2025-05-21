Documentation

HTML + CSS + Vanille JS et DOM

une fonction - fait une action
ne pas hésiter à faire de longs noms de fonctions

Graphikart - video
`.querySelector` ou `.querySelectorAll()`
NodeList != Array

Node methods
*`.nodename`
*`.innerHTML` peut être modifié // ul.innerHTML = "";
*`innerText` retire les espaces,.., texte qui est lisible pour l'utilisateur
*`textContent` show hidden, console.log ,...

### Modifier les éléments
`.setAttribute()`
`.removeAttribute()`
`.getAttribute()` -- si la variable n'existe pas ça renvoie `null`

### DOMTokenList
`.classList`

methods
.classList.remove()
.classList.toggle() // rajoute si n'existe pas, enlève si existe --> clignote?
.classList.add()

### Accèder aux CSS style avec JS -- A utiliser?? 

.style

couleur : .style.color
font : .style.fontWeight

#### Ou 

getComputedStyle() 

### Créer un élément

const newLi = document.createElement('li')
newLi.innerHTML = "bonjour"
document.querySelector('ul).aapendChild(newLi)  // ul existe dans index.html

### Chaîne d'héritage pour JS dans DOM

### Brief
Créer une branche develop
Créer une branche .feature

Ne pas dépasser 20 lignes


