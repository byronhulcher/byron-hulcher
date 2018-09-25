// █▀▀ █░░█ █▀▀ █░░ █▀▀   ▀▀█▀▀ █░░█ █▀▀█ █▀▀█ █░░█ █▀▀▀ █░░█   █▀▀▄ █▀▀▀   █▀▀ █▀▀█ █░░ █▀▀█ █▀▀█ █▀▀
// █░░ █▄▄█ █░░ █░░ █▀▀   ░░█░░ █▀▀█ █▄▄▀ █░░█ █░░█ █░▀█ █▀▀█   █▀▀▄ █░▀█   █░░ █░░█ █░░ █░░█ █▄▄▀ ▀▀█
// ▀▀▀ ▄▄▄█ ▀▀▀ ▀▀▀ ▀▀▀   ░░▀░░ ▀░░▀ ▀░▀▀ ▀▀▀▀ ░▀▀▀ ▀▀▀▀ ▀░░▀   ▀▀▀░ ▀▀▀▀   ▀▀▀ ▀▀▀▀ ▀▀▀ ▀▀▀▀ ▀░▀▀ ▀▀▀

const backgroundColors = ["pink", "green", "cornflowerblue", "tomato"];
let backgroundIndex = parseInt(localStorage.getItem('backgroundIndex')) || 0;

backgroundIndex = (backgroundIndex + 1) % backgroundColors.length;

document.body.style['background-color'] = backgroundColors[backgroundIndex];

localStorage.setItem('backgroundIndex', backgroundIndex);
