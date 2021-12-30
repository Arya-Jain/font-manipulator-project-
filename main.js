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
}

function modelReady(){
    console.log('poseNet is intialised');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

