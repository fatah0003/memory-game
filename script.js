let array = [{
        title: "imgGit",
        image: "./assets/git.png"
    },
    {
        title: "imgHtml",
        image: "./assets/html.png"
    },
    {
        title: "imgJs",
        image: "./assets/js.png"
    },
    {
        title: "imgNode",
        image: "./assets/node.png"
    },
    {
        title: "imgPhp",
        image: "./assets/php.png"
    },
    {
        title: "imgReact",
        image: "./assets/react.png"
    },
    {
        title: "imgSymfony",
        image: "./assets/symfony.png"
    },
    {
        title: "imgVue",
        image: "./assets/vue.png"
    }
];
// Récupiration des element du DOM
let btn = document.querySelector("#load");
let save = document.querySelector("#save");
let reprise = document.querySelector("#reprise");
let countContainer = document.querySelector("#click");
let timeContainer = document.querySelector("#time");
console.log(timeContainer)

// supprimer le storage à chauqe recharge du la page
localStorage.removeItem("count")

// Dupliquer chaque élément de la liste une fois
array = array.flatMap(item => [item, item]);

let container = document.querySelector(".big_container");
let flippedCards = []; // Variable pour stocker les chemins d'image des cartes retournées

// Mélanger les cartes
array.sort(() => 0.5 - Math.random());

// Créer les cartes
array.forEach((element) => {
    let newElement = document.createElement("img");
    newElement.classList.add("imageElement");
    newElement.setAttribute("src", "./assets/default.png");
    newElement.dataset.image = element.image; // Stocker le chemin d'image dans un attribut de données
    container.appendChild(newElement);
    // Ajouter un gestionnaire d'événements de clic à chaque carte
    newElement.addEventListener("click", () => {
        // Vérifier si moins de deux cartes sont déjà retournées et si la carte n'est pas déjà retournée
        if (flippedCards.length < 2 && !newElement.classList.contains("imageFind")) {
            // Retourner la carte en changeant son apparence
            newElement.setAttribute("src", element.image);
            newElement.classList.add("imageFind");
            flippedCards.push(newElement); // Stocker l'élément de carte retournée dans flippedCards

            // Si deux cartes sont retournées, comparer leurs images
            if (flippedCards.length === 2) {
                const [firstCard, secondCard] = flippedCards;
                // operateur ternaire
                (firstCard.dataset.image === secondCard.dataset.image) ? flippedCards = []: setTimeout(() => {
                    flippedCards.forEach(card => {
                        card.setAttribute("src", "./assets/default.png");
                        card.classList.remove("imageFind");
                    });
                    flippedCards = []; // Vider flippedCards
                }, 1000);
            }

        }

        // compteur de click
        count = localStorage.getItem("count")
        count++
        localStorage.setItem("count", count)
        countContainer.textContent = count;
        console.log(count)
    });
});

// bouton de rechargement de la page
btn.addEventListener("click", () => {
    location.reload();
    localStorage.removeItem("count")
});

//bouton de sauvgarde de la partie
save.addEventListener("click", () => {
    const containerContent = container.innerHTML;
    localStorage.setItem("gameSaved", containerContent);
});

//bouton de reprise de la partie
reprise.addEventListener("click", () => {
    const savedContent = localStorage.getItem("gameSaved");
    container.innerHTML = savedContent;

});