song_adele = "";
song_aurora = "";

function preload()
{
    song = loadSound("adele.mp3");
    song = loadSound("aurora.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center;

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);    
}