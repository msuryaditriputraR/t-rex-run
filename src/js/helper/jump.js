import { setIsJump } from "../context/isJump.js";
export default function jump() {
    const dino = document.querySelector(".dino");
    let positionDino = 5;
    const GRAVITY = 0.9;
    let count = 0;
    const upTimerId = setInterval(function () {
        setIsJump(true);
        // MOVE DOWN
        if (count === 15) {
            clearInterval(upTimerId);
            const downTimerId = setInterval(function () {
                if (count === 0) {
                    clearInterval(downTimerId);
                    setIsJump(false);
                }
                positionDino -= 3;
                positionDino *= GRAVITY;
                count--;
                if (dino) {
                    dino.style.bottom = Math.floor(positionDino) + "px";
                }
            }, 20);
        }
        // MOVE UP
        positionDino += 23;
        positionDino *= GRAVITY;
        count++;
        if (dino) {
            dino.style.bottom = Math.floor(positionDino) + "px";
        }
    }, 20);
}
