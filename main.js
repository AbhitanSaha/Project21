  function setup() {
    canvas = createCanvas(350,300);
    canvas.position(500,200);
    video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('MobileNet',modelLoaded1);
  }
  function modelLoaded1(){
    console.log("It WORKED");
  
  }
  function draw(){
    classifier.classify(video,gotResults1);
  }
  function gotResults1(error,results){
    if(error){
      console.error(error);
    }
    else{
      console.log(results);
  }
}