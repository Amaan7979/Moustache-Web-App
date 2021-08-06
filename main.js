function preload() {

}
function setup() {
 canvas=createCanvas(450,450);
 canvas.center();
video=createCapture(VIDEO);
video.size(450,450);
video.hide();
poseNet=ml5.poseNet(video,modelloaded)
poseNet.on('pose',got_poses)
}
function modelloaded() {
console.log("modelloaded");
}

function got_poses(results) {
if( results.length>0 ){
    console.log(results);
    console.log("nose x="+ results[0].pose.nose.x);
    console.log("nose y="+ results[0].pose.nose.y);
}
}

function draw() {
image(video,0,0,450,450)
}

function take_snapshot() {
    save("moustache_picture.png")
}