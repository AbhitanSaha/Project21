  function setup() {
    classifier1=ml5.imageClassifier('MobileNet',modelLoaded1);
    classifier2=ml5.imageClassifier('Google Lens',modelLoaded2);
  }
  function modelLoaded1(){
    console.log("It WORKED");
  }
  function modelLoaded2(){
    console.log("It WORKED");
  }
  7="download.jpg"
  function draw(){
    classifier1.classify(7,gotResults1);
    classifier2.classify(7,gotResults2);
  }
  function gotResults1(){
 
      console.log(results);
      document.getElementById("3").innerHTML=results[0].label;

    
  }
  function gotResults2(){

      console.log(results);
      document.getElementById("2").innerHTML=results[0].label;

    }
   