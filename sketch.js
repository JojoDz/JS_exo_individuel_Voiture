function setup() {
    createCanvas(400, 400);
    //positionner la voiture au milieu écran
    x= width/2-20;
    y= height/2+25;
    //en avant = 0, en arrière =-1
    direction = 0;
  }
  
  function voiture(x, y){
    //forme voiture
    fill('pink');
    rect(x, y, 50, 20);
    rect(x+7.5, y-25, 30, 25);
    fill('white');
    rect(x+10, y-25, 13, 25);
    rect(x+22, y-25, 13, 25);
    fill('yellow');
    rect(x+45, y, 5, 5);
    fill('grey');
    ellipse(x+10, y+20, 15);
    ellipse(x+39, y+20, 15);
  }
  
  function draw() {
    background('lightblue');
    
    //appeler fonction "voiture"
    voiture(x, y);
    
    //définition de la direction avancer
    if (direction == 0) {
      x+=1;
    }
    //définition de la direction reculer
    if (direction == -1) {
      x-=1;
    }
    
    //quand la voiture atteint le bord droit, elle doit reculer
    if (x >= 400) {
      direction = -1;
    }
    //quand la voiture atteint le bord gauche, elle doit avancer
    if (x <= 0) {
      direction = 0;
    }
    
  }