let current = 1;
let rightButton = true;
let leftButton = false;
let stop = true;

function display(img) {
    let imgSource = `pics/${img}.jpg`;
    document.getElementById("image").src = imgSource;
    document.body.style.backgroundImage = `url(${imgSource}`;
    showButton(img);
}

function showButton(current) {
    if (current === 5) {
        document.getElementById('right').style.visibility = "hidden";
        rightButton = false;
    } else if (current === 1) {
        document.getElementById('left').style.visibility = "hidden";
        leftButton = false;
    } else {
        if (leftButton === false) {
            document.getElementById('left').style.visibility = "visible";
            leftButton = true;
        }
        if (rightButton === false) {
            document.getElementById('right').style.visibility = "visible";
            rightButton = true;
        }
    }
}

function next(i) {
    if (current + i <= 5 && current + i >= 1) {
        current += i;
        display(current);
        showButton(current);
    }

}


function play() {
    if (!stop) {
        if (current < 5) {
            next(1);
            setTimeout(play, 2000);

        } else {
            stop = true;
        }
    }
}

function start() {
    stop = false;
    play();
}

function pause() {
    stop = true;
}