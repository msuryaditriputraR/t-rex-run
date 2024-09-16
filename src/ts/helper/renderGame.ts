import control from "./control.js";
import dino from "./dino.js";
import generateObstacle from "./generateObstacle.js";
import renderScore from "./renderScore.js";

export default function renderGame(): void {
    const background = document.querySelector(".background") as HTMLElement;
    const grid = document.querySelector(".grid");

    if (background) {
        background.style.animationPlayState = "running";
    }

    if (grid) {
        grid.appendChild(dino());
    }

    renderScore();
    generateObstacle(10000, 1000);
    control();
}
