var backgroundImg;
var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9;
var snowImg
var snow10,snow11,snow12,snow13,snow14,snow15,snow16,snow17,snow18,snow19,snow20;







function preload(){
  backgroundImg=loadImage("snow3.jpg");
  snowImg = loadAnimation("snow25.png","Snow7.png");

  
}

function setup() {
  createCanvas(800,400);
  
  snow1 = createSprite(100,500,20,20); 
  snow1.addAnimation("s",snowImg); 
  snow1.scale = 0.2;

  snow2 = createSprite(200,100,20,20);
  snow2.addAnimation("s",snowImg);
  snow2.scale = 0.2;

  snow3 = createSprite(300,150,20,20);
  snow3.addAnimation("s",snowImg);
  snow3.scale =0.2;

  snow4 = createSprite(400,200,20,20);
  snow4.addAnimation("s",snowImg);
  snow4.scale=0.2;

  snow5 = createSprite(500,250,20,20);
  snow5.addAnimation("s",snowImg);
  snow5.scale=0.2;

  snow6 = createSprite(600,300,20,20);
  snow6.addAnimation("s",snowImg);
  snow6.scale=0.2;

  snow7 = createSprite(700,350,20,20);
  snow7.addAnimation("s",snowImg);
  snow7.scale=0.2;

  snow8 = createSprite(8000,20,20);
  snow8.addAnimation("s",snowImg);
  snow8.scale=0.2;
  
  snow9 = createSprite(100,290,20,20);
  snow9.addAnimation("s",snowImg);
  snow9.scale=0.2;

  snow10 = createSprite(200,300,20,20);
  snow10.addAnimation("s",snowImg);
  snow10.scale=0.2;

  snow11 = createSprite(300,300,20,20);
  snow11.addAnimation("s",snowImg);
  snow11.scale=0.2;

  snow12 = createSprite(400,300,20,20);
  snow12.addAnimation("s",snowImg);
  snow12.scale=0.2;

  snow13 = createSprite(400,280,20,20);
  snow13.addAnimation("s",snowImg);
  snow13.scale=0.2;

  snow14 = createSprite(500,200,20,20);
  snow14.addAnimation("s",snowImg);
  snow14.scale=0.2;

  snow15 = createSprite(600,270,20,20);
  snow15.addAnimation("s",snowImg);
  snow15.scale=0.2;

  snow16 = createSprite(700,690,20,20);
  snow16.addAnimation("s",snowImg);
  snow16.scale=0.2;

  snow17 = createSprite(500,600,20,20);
  snow17.addAnimation("s",snowImg);
  snow17.scale=0.2;

  snow18 = createSprite(100,800,20,20);
  snow18.addAnimation("s",snowImg);
  snow18.scale=0.2;

  snow19 = createSprite(600,50,20,20);
  snow19.addAnimation("s",snowImg);
  snow19.scale=0.2;

  snow20 = createSprite(300,30,20,20);
  snow20.addAnimation("s",snowImg);
  snow20.scale=0.2;

  snow21 = createSprite(400,30,20,20);
  snow21.addAnimation("s",snowImg);
  snow21.scale=0.2;
}


function draw() {
  background(backgroundImg);
    

  drawSprites();
  }
