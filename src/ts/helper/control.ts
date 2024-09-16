import { setIsGameRender } from "../context/isGameRender.js";

export default function control() {
    const grid = document.querySelector(".grid");
    const alert = document.querySelector(".alert") as HTMLElement;
    const background = document.querySelector(".background") as HTMLElement;
    const alertTitle = alert.querySelector(".alert__title") as HTMLElement;
    const dieAudio = document.getElementById("die-audio") as HTMLAudioElement;

    const controlTimerId = setInterval(function () {
        const obstacle = grid?.querySelector(".obstacle") as HTMLElement;
        const dino = grid?.querySelector(".dino") as HTMLElement;

        const obstaclePosition = obstacle?.getBoundingClientRect().x;
        const dinoPosition = parseFloat(dino?.style.bottom);

        if (obstaclePosition < 60 && dinoPosition < 60) {
            clearInterval(controlTimerId);
            setIsGameRender(false);
            dieAudio.play();

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
