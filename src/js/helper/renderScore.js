import { getIsGameRender } from "../context/isGameRender.js";
import { getScore, setScore } from "../context/score.js";
export default function renderScore() {
    const score = document.getElementById("score");
    const highscore = document.getElementById("highscore");
    const pointAudio = document.getElementById("point-audio");
    const initialScore = 0;
    setScore(initialScore);
    highscore.style.display = "none";
    const scoreTimerId = setInterval(() => {
        if (getScore() % 1000 === 0 && getScore() !== 0) {
            pointAudio.play();
        }
        if (!getIsGameRender()) {
            if (!localStorage.getItem("highscore")) {
                localStorage.setItem("highscore", getScore() + "");
            }
            else if (Number(localStorage.getItem("highscore")) < getScore()) {
                localStorage.setItem("highscore", getScore() + "");
            }
            highscore.style.display = "initial";
            highscore.textContent =
                "HI " +
                    ("000000" + localStorage.getItem("highscore")).substring((getScore() + "").length);
            clearInterval(scoreTimerId);
            return;
        }
        setScore(getScore() + 1);
        if (score) {
            score.textContent = ("000000" + getScore()).substring((getScore() + "").length);
        }
    }, 30);
}
