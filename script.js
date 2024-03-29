
let array = [
    { title: "imgGit", image: "./assets/git.png" },
    { title: "imgHtml", image: "./assets/html.png" },
    { title: "imgJs", image: "./assets/js.png" },
    { title: "imgNode", image: "./assets/node.png" },
    { title: "imgPhp", image: "./assets/php.png" },
    { title: "imgReact", image: "./assets/react.png" },
    { title: "imgSymfony", image: "./assets/symfony.png" },
    { title: "imgVue", image: "./assets/vue.png" }
];

// Duplique chaque élément de la liste une fois
array = array.flatMap(item => [item, item]);

let container = document.querySelector(".big_container");  
//mélange les cartes
array.sort(() => 0.5 - Math.random());
//créé les cartes
array.forEach( (element)=> {
    let newElement = document.createElement("img");
    newElement.classList.add("imageElement");
    newElement.setAttribute("src", "assets/default.png");
    container.appendChild(newElement); 
//ajoute un événement lors du click pour retourner les cartes
    newElement.addEventListener("click",  ()=> { 
        newElement.setAttribute("src", element.image);
        newElement.classList.add("imageFind");

    })
});
