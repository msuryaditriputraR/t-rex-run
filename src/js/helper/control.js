import { setIsGameRender } from "../context/isGameRender.js";
export default function control() {
    const grid = document.querySelector(".grid");
    const alert = document.querySelector(".alert");
    const background = document.querySelector(".background");
    const alertTitle = alert.querySelector(".alert__title");
    const dieAudio = document.getElementById("die-audio");
    const actionIcon = document.getElementById("action-icon");
    const controlTimerId = setInterval(function () {
        const obstacle = grid === null || grid === void 0 ? void 0 : grid.querySelector(".obstacle");
        const dino = grid === null || grid === void 0 ? void 0 : grid.querySelector(".dino");
        const obstaclePosition = obstacle === null || obstacle === void 0 ? void 0 : obstacle.getBoundingClientRect().x;
        const dinoPosition = parseFloat(dino === null || dino === void 0 ? void 0 : dino.style.bottom);
        if (obstaclePosition < 60 && dinoPosition < 60) {
            clearInterval(controlTimerId);
            setIsGameRender(false);
            dieAudio.play();
            actionIcon.src = "./src/img/restart.svg";
            if (alert && alertTitle) {
                alert.style.display = "block";
                alertTitle.textContent = "Game Over";
            }
            if (grid) {
                grid.replaceChildren();
            }
            background.style.animationPlayState = "paused";
        }
    }, 20);
}
