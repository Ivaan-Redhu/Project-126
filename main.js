song_adele = "";
song_aurora = "";
song_adele_status = "";
song_aurora_status = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function preload()
{
    song_adele = loadSound("adele.mp3");
    song_aurora = loadSound("aurora.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center;

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    song_adele_status = song_adele.isPlaying();

    if(scoreLeftWrist > 0.2){
        circle(leftWristX,leftWristY,20)
        song_aurora.stop();
        if(song_adele_status == false){
            song_adele.play();
        }
        else{
            document.getElementById("song_id").innerHTML = "Song Name: Oh My God - Adele";
        }
    }
}

function modelLoaded() {
    console.log('PoseNet Is Intialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY)

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY)
    }
}

function isPlaying() {

}