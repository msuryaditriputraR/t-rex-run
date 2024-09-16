import { getIsGameRender, setIsGameRender } from "./context/isGameRender.js";
import { getIsJump } from "./context/isJump.js";
import jump from "./helper/jump.js";
import renderGame from "./helper/renderGame.js";
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", function (e) {
        if (e.code === "Space" && getIsGameRender()) {
            if (!getIsJump()) {
                jump();
            }
        }
    });
    document.addEventListener("click", function () {
        if (getIsGameRender()) {
            if (!getIsJump()) {
                jump();
            }
        }
    });
    const alertSection = document.querySelector(".alert");
    const btnStart = document.getElementById("btn-start");
    if (btnStart) {
        btnStart.addEventListener("click", function (e) {
            e.stopPropagation();
            setIsGameRender(true);
            alertSection.style.display = "none";
            renderGame();
        });
    }
});
