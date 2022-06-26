function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    canvas.parent("canvas");

    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw(){
    background(0);
    image(video, 0, 0, 500, 500);

}

function modelLoaded(){
    console.log("Model Loaded!!");
}