let array = [
    {title: "imgGit", image: "./assets/git.png"},
    {title: "imgGit", image: "./assets/git.png"},
    {title: "imgHtml", image: "./assets/html.png"},
    {title: "imgHtml", image: "./assets/html.png"},
    {title: "imgJs", image: "./assets/js.png"},
    {title: "imgJs", image: "./assets/js.png"},
    {title: "imgNode", image: "./assets/node.png"},
    {title: "imgNode", image: "./assets/node.png"},
    {title: "imgPhp", image: "./assets/php.png"},
    {title: "imgPhp", image: "./assets/php.png"},
    {title: "imgReact", image: "./assets/react.png"},
    {title: "imgReact", image: "./assets/react.png"},
    {title: "imgSymfony", image: "./assets/symfony.png"},
    {title: "imgSymfony", image: "./assets/symfony.png"},
    {title: "imgVue", image: "./assets/vue.png"},
    {title: "imgVue", image: "./assets/vue.png"},
];

let container = document.querySelector(".big_container");


array.forEach(function(element){
    let newElement = document.createElement("img");
    newElement.classList.add("imgone");
    newElement.setAttribute("src", element.image);
    
    
    container.appendChild(newElement);
   

    // container.innerHTML += `<img class="imgone" src="./assets/${element.image}" alt=""></img>`
    // console.log (element.image);
});
// for(i=0; i<array.length; i++){
//     array[i][image];
// }
