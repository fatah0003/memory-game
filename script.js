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

let btn = document.querySelector("#load");
let save = document.querySelector("#save");
let reprise = document.querySelector("#reprise");
let countContainer = document.querySelector("#click");
let timeContainer = document.querySelector("#time");
let container = document.querySelector(".big_container");
let flippedCards = [];
let timerStarted = false;
let timerInterval;
let timeElapsed = 0;

localStorage.removeItem("count");

array = array.flatMap(item => [item, item]);
array.sort(() => 0.5 - Math.random());

function handleCardClick() {
    if (!timerStarted) {
        startTimer();
        timerStarted = true;
    }
    
    if (flippedCards.length < 2 && !this.classList.contains("imageFind")) {
        this.setAttribute("src", this.dataset.image);
        this.classList.add("imageFind");
        flippedCards.push(this);
        if (flippedCards.length === 2) {
            const [firstCard, secondCard] = flippedCards;
            if (firstCard.dataset.image === secondCard.dataset.image) {
                flippedCards = [];
            } else {
                setTimeout(() => {
                    flippedCards.forEach(card => {
                        card.setAttribute("src", "./assets/default.png");
                        card.classList.remove("imageFind");
                    });
                    flippedCards = [];
                }, 1000);
            }
        }

        let count = parseInt(localStorage.getItem("count")) || 0;
        count++;
        localStorage.setItem("count", count);
        countContainer.textContent = count;
    }

    if (document.querySelectorAll('.imageElement:not(.imageFind)').length === 0) {
        clearInterval(timerInterval);
        setTimeout(() => {
            alert("Bien joué, Partie terminée");
        }, 1000);
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeElapsed++;
        timeContainer.textContent = formatTime(timeElapsed);
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function cardCreation() {
    array.forEach((element) => {
        let newElement = document.createElement("img");
        newElement.classList.add("imageElement");
        newElement.setAttribute("src", "./assets/default.png");
        newElement.dataset.image = element.image;
        container.appendChild(newElement);
        newElement.addEventListener("click", handleCardClick);
    });
}

btn.addEventListener("click", () => {
    location.reload();
    localStorage.removeItem("count");
});

save.addEventListener("click", () => {
    const flippedCardImages = flippedCards.map(card => card.dataset.image);
    localStorage.setItem("flippedCards", JSON.stringify(flippedCardImages));
    const containerContent = container.innerHTML;
    localStorage.setItem("gameSaved", containerContent);
    alert("Partie sauvegardée avec succès.");
});

reprise.addEventListener("click", () => {
    const savedContent = localStorage.getItem("gameSaved");
    if (savedContent) {
        container.innerHTML = savedContent;
        const restoredCards = container.querySelectorAll(".imageElement");
        restoredCards.forEach(card => {
            card.addEventListener("click", handleCardClick);
        });
        alert("Partie chargée avec succès.");
    } else {
        alert("Aucune sauvegarde trouvée.");
    }
});

cardCreation();

// Partie pour l'audio
let audio = document.querySelector(".audio");
let play = document.querySelector("#play");
let stop = document.querySelector("#stop");

play.addEventListener("click", () => {
    audio.play();
});

stop.addEventListener("click", () => {
    audio.pause();
});
