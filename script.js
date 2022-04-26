Webcam.set({
    width : 350 ,
    height : 325 ,
    image_format : "png" ,
    png_quality : 90 
    
});

camera = document.getElementById("camera");
Webcam.attach("#camera");



function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
        });
}
console.log("ml5.version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3-ZOSHpNc/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "The prediction is" + prediction; 
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
}