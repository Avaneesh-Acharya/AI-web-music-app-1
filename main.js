song=""
song2=""
s1=""
s2=""
leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0
leftWrist_score=0
function preload() {
    song=loadSound("music.mp3")
    song=loadSound("music2.mp3")
}
function setup() {
    canvas=createCanvas(850, 600)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video,  model_loaded)
    poseNet.on("pose", got_results)
}
function draw() {
    image(video, 0, 0, 850, 600)
    fill("blue")
    stroke("red")
    s1=song.isPlaying()
    s2=song2.isPlaying()
    if (leftWrist_score>0.2) {
    circle( leftWristX, leftWristY, 20)
    n=Number(leftWristY)
    f=floor(n)
    if (s1==false) {
        song.play()
        document.getElementById("song_name").innerHTML="Song 1"
    }
}
if (rightWrist_score>0.2) {
    circle( rightWristX, rightWristY, 20)
    n=Number(rightWristY)
    f=floor(n)
    if (s2==false) {
        song2.play()
        document.getElementById("song_name").innerHTML="Song 2"
    }
}}
function play1() {
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
       console.log(results)
       leftWrist_score=results[0].pose.keypoints[9].score

       console.log("score"+leftWrist_score)
       leftWristX=results[0].pose.leftWrist.x
       leftWristY=results[0].pose.leftWrist.y
       console.log(leftWristX, leftWristY)
       rightWristX=results[0].pose.rightWrist.x
       rightWristY=results[0].pose.rightWrist.y
       console.log(rightWristX, rightWristY)
    }
}