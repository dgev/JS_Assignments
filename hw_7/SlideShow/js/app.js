let current = 1;
let stop = true;
let isPlaying = false;

function display(img) {
    if (img === 6) {
        img = 1;
    } else if (img === 0) {
        img = 5;
    }
    current = img;
    let imgSource = `pics/${img}.jpg`;
    document.getElementById("image").src = imgSource;
    document.body.style.backgroundImage = `url(${imgSource}`;
}

function next(i) {
    if (current + i <= 6 && current + i >= 0) {
            display(current + i);
    }
}

function play() {
    if (!stop) {
        if (current === 5) {
            current = 0;
        }
        display(current + 1);
        setTimeout(play, 2000);
    }
}

function start() {
    if (!isPlaying) {
        stop = false;
        isPlaying = true;
        play();
    }
}

function pause() {
    stop = true;
    isPlaying = false;
}