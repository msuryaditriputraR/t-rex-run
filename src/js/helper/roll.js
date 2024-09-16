export default function roll(min, max, floatFlag = false) {
    const r = Math.random() * (max - min) + min;
    return floatFlag ? r : Math.floor(r);
}
