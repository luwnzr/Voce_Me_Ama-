const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const message = document.getElementById("message");
const teddy = document.getElementById("teddy");
const heartsContainer = document.getElementById("hearts-container");

let yesSize = 18;

// Efeito do botão "Sim" crescendo
noBtn.addEventListener("click", function() {
    yesSize += 10;
    yesBtn.style.fontSize = `${yesSize}px`;

    // Ursinho balança de tristeza
    teddy.classList.add("shake");
    setTimeout(() => teddy.classList.remove("shake"), 500);
});

// Efeito ao clicar em "Sim"
yesBtn.addEventListener("click", function() {   
    message.classList.remove("hidden");
    document.querySelector(".buttons").style.display = "none";

    // Criar corações animados
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
});

// Criar corações flutuantes
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 1 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}
