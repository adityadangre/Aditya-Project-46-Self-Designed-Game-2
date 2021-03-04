var bg,plr_bg_img,track;
var start_img, startover_img, start, startgame;
var btredc1_img, btredc2_img, btredc;
var btwhitec1_img, btwhitec2_img, btwhitec3_img, btwhitec;
var btyellowc1_img, btyellowc2_img, btyellowc;
var btblackc1_img, btblackc2_img, btblackc;
var btbluec1_img, btbluec2_img, btbluec;
var btgreenc1_img, btgreenc2_img, btgreenc;
var carselection,streetselection;
var btcontinue1_img, btcontinue2_img,btcontinue;
var btrestart1_img, btrestart2_img,btrestart;
var btoption1_img, btoption2_img,btoption;
var car1_img,car2_img,car3_img,car4_img,car5_img,car6_img;
var ecar1, ecar2, ecar3, ecar4, ecar5, ecar6, ecar7;
var canyon_img, city_img, desert_img, grass_img, snow_img, water_img;
var st1, st2, st3, st4, st5, st6;
var st1o1,st1o2,st2o1,st2o2,st3o1,st3o2, st4o1,st4o2,st5o1,st5o2,st6o1,st6o2; 
var enemy,ecar,rodsideobs,coin,fueltank;//group
var game,player,carcollide;
var plr_car=0, plr_bg=0;
var gameState=0, carvelocity=0;
var distance=0, fuel=20,oxygen=3, coin=0;
var startpoint_img,startpoint;
var help, help_img;
var bs_ani,bs;
var fueltank_img, coin_img;



function preload(){
    bg = loadImage("images/bg/startbg.jpg");
    help_img = loadImage("images/obstacles/help.png");
    //start button image
    start_img = loadImage("images/button/start.jpg");
    startover_img = loadImage("images/button/startover.jpg");
    
    //carselection button image
    btredc1_img = loadImage("images/button/btredcar1.jpg");
    btredc2_img = loadImage("images/button/btredcar2.jpg");

    btwhitec1_img = loadImage("images/button/btwhitecar1.jpg");
    btwhitec2_img = loadImage("images/button/btwhitecar2.jpg");
    

    btyellowc1_img = loadImage("images/button/btyellowcar1.jpg");
    btyellowc2_img = loadImage("images/button/btyellowcar2.jpg");

    btblackc1_img = loadImage("images/button/btblackcar1.jpg");
    btblackc2_img = loadImage("images/button/btblackcar2.jpg");

    btbluec1_img = loadImage("images/button/btbluecar1.jpg");
    btbluec2_img = loadImage("images/button/btbluecar2.jpg");

    btgreenc1_img = loadImage("images/button/btgreencar1.jpg");
    btgreenc2_img = loadImage("images/button/btgreencar2.jpg");

    btcontinue1_img = loadImage("images/button/continue1.jpg");
    btcontinue2_img = loadImage("images/button/continue2.jpg");

    btrestart1_img = loadImage("images/button/restart1.jpg");
    btrestart2_img = loadImage("images/button/restart2.jpg");

    btoption1_img = loadImage("images/button/option1.jpg");
    btoption2_img = loadImage("images/button/option2.jpg");

    //street image
    canyon_img = loadImage("images/bg/canyon.jpg");
    city_img = loadImage("images/bg/city.jpg");
    desert_img = loadImage("images/bg/desert.jpg");
    grass_img = loadImage("images/bg/grass.jpg");
    snow_img = loadImage("images/bg/snow.jpg");
    water_img = loadImage("images/bg/water.jpg");
    
    //player car image
    car1_img = loadImage("images/car/car1.png"); //red car
    car2_img = loadImage("images/car/car2.png"); //white car
    car3_img = loadImage("images/car/car3.png"); //yellow car
    car4_img = loadImage("images/car/car4.png"); // black car
    car5_img = loadImage("images/car/car5.png"); //blue car
    car6_img = loadImage("images/car/car6.png"); //green car

    //enemy car image
    ecar1 = loadImage("images/car/ecar1.png");
    ecar2 = loadImage("images/car/ecar2.png");
    ecar3 = loadImage("images/car/ecar3.png");
    ecar4 = loadImage("images/car/ecar4.png");
    ecar5 = loadImage("images/car/ecar5.png");
    ecar6 = loadImage("images/car/ecar6.png");
    ecar7 = loadImage("images/car/ecar7.png");

    //road side obstacles
    st1o1 = loadImage("images/obstacles/cobs1.png");//canyon road side image
    st1o2 = loadImage("images/obstacles/cobs2.png");
    st2o1 = loadImage("images/obstacles/citytree.png");//city road side image
    st2o2 = loadImage("images/obstacles/citydrainage.png");
    st3o1 = loadImage("images/obstacles/desertc1.png");//desert road side image
    st3o2 = loadImage("images/obstacles/desertc2.png");
    st4o1 = loadImage("images/obstacles/pobs1.png");//grass road side image
    st4o2 = loadImage("images/obstacles/pobs2.png");
    st5o1 = loadImage("images/obstacles/snowman.png");//snow road side image
    st5o2 = loadImage("images/obstacles/snowtree.png");
    st6o1 = loadImage("images/obstacles/bridgeobs1.png");//water side Image
    st6o2 = loadImage("images/obstacles/bridgeobs2.png");

    fueltank_img = loadImage("images/obstacles/petrol.png");
    coin_img = loadImage("images/coin/coin.png");

    startpoint_img = loadImage("images/obstacles/start.png")

    bs_ani = loadAnimation("images/bombspot/b1.png","images/bombspot/b2.png","images/bombspot/b3.png","images/bombspot/b4.png","images/bombspot/b5.png","images/bombspot/b6.png","images/bombspot/b7.png","images/bombspot/b8.png","images/bombspot/b9.png","images/bombspot/b10.png","images/bombspot/b11.png","images/bombspot/b12.png","images/bombspot/b13.png","images/bombspot/b14.png","images/bombspot/b15.png","images/bombspot/b16.png");
}

function setup(){
    
    canvas = createCanvas(displayWidth-600, displayHeight-170);

    help = createSprite(canvas.width/2, (canvas.height/2)+80);
    help.addImage(help_img);
    help.scale=0.55;
    help.visible=false;

    //start button sprite
    start = createSprite(canvas.width/2, (canvas.height/2));
    start.scale = 0.6;
    
    //car selection button sprite
    btredc=createSprite((canvas.width/2) - 300, (canvas.height/2) + 100);
    btredc.visible=false;
    btredc.scale=0.6;

    btwhitec=createSprite((canvas.width/2), (canvas.height/2) + 100);
    btwhitec.visible=false;
    btwhitec.scale=0.6;

    btyellowc=createSprite((canvas.width/2) + 300, (canvas.height/2) + 100);
    btyellowc.visible=false;
    btyellowc.scale=0.6;

    btblackc=createSprite((canvas.width/2) - 300, (canvas.height/2) + 200);
    btblackc.visible=false;
    btblackc.scale=0.6;

    btbluec=createSprite((canvas.width/2), (canvas.height/2) + 200);
    btbluec.visible=false;
    btbluec.scale=0.6;

    btgreenc=createSprite((canvas.width/2) + 300, (canvas.height/2) + 200);
    btgreenc.visible=false;
    btgreenc.scale=0.6;

    btcontinue=createSprite(start.x-270,start.y);
    btcontinue.addImage(btcontinue1_img);
    btcontinue.visible=false;
    btcontinue.scale=0.6;

    btrestart=createSprite(start.x,start.y);
    btrestart.addImage(btrestart1_img);
    btrestart.visible=false;
    btrestart.scale=0.6;

    btoption=createSprite(start.x+270,start.y);
    btoption.addImage(btoption1_img);
    btoption.visible=false;
    btoption.scale=0.6;

    //street selection sprite
    st1=createSprite((canvas.width/2) - 380, (canvas.height/2) - 50);
    st1.visible=false;
    st1.scale=0.05;

    st2=createSprite((canvas.width/2) -  230, (canvas.height/2) - 50);
    st2.visible=false;
    st2.scale=0.05;

    st3=createSprite((canvas.width/2) - 80, (canvas.height/2) - 50);
    st3.visible=false;
    st3.scale=0.05;

    st4=createSprite((canvas.width/2) + 70, (canvas.height/2) - 50);
    st4.visible=false;
    st4.scale=0.05;

    st5=createSprite((canvas.width/2) + 220, (canvas.height/2) - 50);
    st5.visible=false;
    st5.scale=0.05;

    st6=createSprite((canvas.width/2) + 370, (canvas.height/2) - 50);
    st6.visible=false;
    st6.scale=0.05;

    //player street/track sprite
    track=createSprite(canvas.width/2,canvas.height/2+160);
    track.visible=false;
    track.scale=1.45;

    //player sprite
    player=createSprite(canvas.width-603,canvas.height-50);
    player.visible=false;

    startpoint=createSprite(canvas.width-500,canvas.height-200)
    startpoint.visible=false;
    startpoint.addImage(startpoint_img);
    startpoint.scale=0.6;

    //bs=createSprite(player.x,player.y)
    //bs.addAnimation("bomb",bs_ani);
    //bs.addAnimation("bomb1",bs_ani);
    //bs.visible=false;
    //bs.scale=0.3;

    startgame = new startGame();
    streetselection = new streetSelection();
    carselection = new carSelection();
    game = new Game();        
    enemy = new Group();
    rodsideobs = new Group();
    fueltank = new Group();
    coin = new Group();
}

function draw(){
    background(bg);

    //console.log(oxygen);

    //Start Game with Glick on START button
    if(gameState===0 || gameState===4){       
        startgame.gameStart();
       HELP();
    }

    //Select Car from 6 type of Cars
    if(gameState===1 ){        
        carselection.selectCar();
        HELP();
    }

    //Street Selection
    if(gameState===2){        
        streetselection.selectStreet();
        HELP();
    }

    //Start to play game
    if(gameState===3 ){
        clear();
        game.play();  
    }

    drawSprites();
    if(gameState===3){
        textSize(25);
        fill("white");
        stroke("black");
        strokeWeight(10);
        text("Distance : " + Math.round(distance/100) + "KM",canvas.width-910, canvas.height-350);
        text("Fuel : " + fuel + " L ", canvas.width-910, canvas.height-300);
        text("Life : " + oxygen ,canvas.width-910, canvas.height-250);
    }
}
//HELP Menu Display
function HELP(){
    if (keyWentDown("H")) {
        help.visible=true;
        help.depth=help.depth+100;
    }
    if(keyWentUp("H"))
        help.visible=false;

    textSize(30);
    fill("white");
    stroke(216, 43, 4);
    strokeWeight(6);
    text("Press  ' H '  Key  For  Help", (displayWidth-1185)/2-280 + 680, (displayHeight-650)/2 + 570);
}

