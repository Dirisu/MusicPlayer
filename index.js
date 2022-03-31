const music = document.querySelector("#music");
const imageCover = document.querySelector("#image-cover");
const previous = document.querySelector("#previous");
const shuffle = document.querySelector("#shuffle");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const next = document.querySelector("#next");
// const vol = document.querySelector("volume");
const background = document.querySelector("body");

let track = 1;

play.addEventListener("click", ()=>{
    imageCover.setAttribute("src", `Images/${track}.jpg`);
    music.setAttribute("src", `Audio/${track}.mp3`);
    music.play();
    play.classList.add("d-none");
    pause.classList.remove("d-none");
    background.classList.add("main-bg");
});

pause.addEventListener("click", ()=>{
    music.pause();
    pause.classList.add("d-none");
    play.classList.remove("d-none");
    background.classList.remove("main-bg")
});

previous.addEventListener("click", ()=>{
    track --;

    if (track < 1) {
        track = 37;
    }

    // imageCover.setAttribute("src", `Images/${track}.jpg`);
    music.setAttribute("src", `Audio/${track}.mp3`);
    music.play();
    play.classList.add("d-none");
    pause.classList.remove("d-none");
});

next.addEventListener("click", ()=>{
    track ++;

    if (track > 37) {
        track = 1;
    }

    imageCover.setAttribute("src", `Images/${track}.jpg`);
    music.setAttribute("src", `Audio/${track}.mp3`);
    music.play();
    play.classList.add("d-none");
    pause.classList.remove("d-none");
});

shuffle.addEventListener("click", ()=>{
    track = Math.floor(Math.random() * 37) + 1;

    imageCover.setAttribute("src", `Images/${track}.jpg`);
    music.setAttribute("src", `Audio/${track}.mp3`);
    music.play();
    play.classList.add("d-none");
    pause.classList.remove("d-none");
});
