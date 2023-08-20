song=""
leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0
function preload() {
    song=loadSound("music.mp3")
}
function setup() {
    canvas=createCanvas(850.568, 600)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video,  model_loaded)
    poseNet.on("pose", got_results)
}
function draw() {
    image(video, 0, 0, 850.568, 600)
}
function play() {
    song.play()
    song.setVolume(1.0)
    song.rate(2.5)
}
function Stop() {
    song.stop()
}
function model_loaded() {
    console.log("poseNet is initialized")
}
function got_results(results) {
    if (results.length>0) {
       //console.log(results)//
       leftWristX=results[0].pose.leftWrist.x
       leftWristY=results[0].pose.leftWrist.y
       console.log(leftWristX, leftWristY)
       rightWristX=results[0].pose.rightWrist.x
       rightWristY=results[0].pose.rightWrist.y
       console.log(rightWristX, rightWristY)
    }
}