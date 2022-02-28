function preload() {

}

function setup(){
    canvas = createCanvas(630 , 470);
    canvas.position(110 , 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 630 , 470);
    circle(30, 30, 50);
    rect(53, 10, 530, 50);
    circle(610, 30, 50);
    circle(30, 440, 50);
    rect(53, 420, 530, 50);
    circle(610, 440, 50);
}

function take_snapshot(){
    save('Picture.png');
}

