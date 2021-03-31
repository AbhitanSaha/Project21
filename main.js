function setup() {
    canvas = createCanvas(350,300);
    canvas.position(450,200);
    video = createCapture(VIDEO);
    video.hide();
  }
  function draw(){
    image(video,0,0,350,300);
  }
  
  
  
  