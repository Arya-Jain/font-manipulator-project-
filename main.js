
rightWristX = 0;
leftWristX = 0;
difference = 0;

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 550);

    canvas = createCanvas(520, 380);
    canvas.position(500, 175);

    PoseNet = ml5.poseNet(video, modelReady);
    PoseNet.on('pose', gotPoses);
}

function draw(){
    background("grey");

    textSize(difference);
    fill("pink");
    text("Arya", 50, 300);

    document.getElementById("square_width").innerHTML = "Font Size is " + difference;
}

function modelReady(){
    console.log('poseNet is intialised');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;

        difference = Math.floor(leftWristX - rightWristX);

        console.log("Right Wrist  X - " + rightWristX + " Left Wrist X - " + leftWristX + " Differnce is " + difference);
    }
}

