import { getIsGameRender } from "../context/isGameRender.js";
import { getScore } from "../context/score.js";
import roll from "./roll.js";
export default function generateObstacle(maxObstacleDuration, backgroundDuration) {
    const grid = document.querySelector(".grid");
    const background = document.querySelector(".background");
    let obstaclePosition = Number(document.body.offsetWidth);
    const randomTime = roll(500, maxObstacleDuration);
    background.style.animationDuration = backgroundDuration + "s";
    if (getIsGameRender()) {
        const obstacle = document.createElement("div");
        obstacle.classList.add("obstacle");
        obstacle.style.left = obstaclePosition + "px";
        if (grid) {
            grid.appendChild(obstacle);
        }
        const obstacleTimerId = setInterval(function () {
            if (!getIsGameRender()) {
                clearInterval(obstacleTimerId);
                return;
            }
            if (maxObstacleDuration > 1500) {
                if (getScore() % 100 === 0) {
                    maxObstacleDuration -= 100;
                    backgroundDuration -= 10;
                }
            }
            obstaclePosition -= 10;
            obstacle.style.left = obstaclePosition + "px";
            if (obstaclePosition <= 0) {
                obstacle.remove();
            }
        }, 20);
        setTimeout(() => {
            generateObstacle(maxObstacleDuration, backgroundDuration);
        }, randomTime);
    }
}
