class Game {
  constructor(){
  }
  play(){
    background(rgb(198,135,103));

    startpoint.visible=true;

    if(gameState===3){
    camera.y=player.y;
    }     
    
    this.selecttrack();
    this.selectplayercar();   
    this.spawnCar();
    this.roadside();
    this.collideCar();
    this.spawnCoin();
    this.spawnFuel();

    if(keyDown(UP_ARROW)){
      track.velocityY=carvelocity+1;
      if(carvelocity<=80)
        carvelocity=carvelocity+1;
        startpoint.velocityY=track.velocityY;
    }
    distance=distance + Math.round(track.velocityY/6);
    fuel= 20 - Math.round(distance/2000);
    
    if(keyDown(DOWN_ARROW)){
      startpoint.velocityY=track.velocityY;
      if(track.velocityY>0)
        track.velocityY=track.velocityY-1;
      if(track.velocity===0){
        carvelocity=0;
        track.velocityY=0;
      }
      
    }     
    if(keyDown(LEFT_ARROW))
      player.x=canvas.width-600;      

    if(keyDown(RIGHT_ARROW))
      player.x=canvas.width-320;      

    if(track.y>canvas.height+300 || track.y<0)
      track.y=canvas.height-400;
    
      if(track.velocityY>0){
        for (var i = 0; i < enemy.length; i++) 
            enemy.get(i).velocityY=20;  
        for (var i = 0; i < rodsideobs.length; i++) 
            rodsideobs.get(i).velocityY=track.velocityY;  
        //set velocity of coin and fuel tank hare similar to roadside obs                      
     }

    if(track.velocityY<=0){
      for (var i = 0; i < enemy.length; i++) 
        enemy.get(i).velocityY=-20; 
      for (var i = 0; i < rodsideobs.length; i++) 
        rodsideobs.get(i).velocityY=0;  
      //set velocity of coin and fuel tank hare similar to roadside obs  
      
   }

}
  //Enemy car run on Road         
  spawnCar(){
    if(distance>10){
    if(frameCount % 40 === 0){
      ecar=createSprite(canvas.width-600,camera.y-height/2-100);
      var r = Math.round(random(1,2));
      if(r===1)
        ecar.x=canvas.width-600;          
      if(r===2)
        ecar.x = canvas.width-320;       
        
      //enemy car     
      var rand = Math.round(random(1,7));
      switch(rand){
        case 1: ecar.addImage(ecar1);
                ecar.scale=1.2;              
                break;
        case 2: ecar.addImage(ecar2);
                ecar.scale=1.2;
                break;
        case 3: ecar.addImage(ecar3);
                ecar.scale= 1.6;
                break;
        case 4: ecar.addImage(ecar4);
                ecar.scale=1.3;
                break;
        case 5: ecar.addImage(ecar5);
                ecar.scale= 1.5
                break;
        case 6: ecar.addImage(ecar6);
                ecar.scale= 1.5
                break;
        case 7: ecar.addImage(ecar7);
                ecar.scale= 1.5        
                break;
        default: break;
      }
      ecar.lifetime = 500;
      enemy.add(ecar);       
    }
  }
  }

  //Coin on Road
  spawnCoin(){
  
  }

  //Car collide with coin
  collideCoin(){

  }

  //Fuel Tank on Road
  spawnFuel(){

  }

  //if car collide with fuel Tank
  collideFuel(){

  }
//road Side Obtacles creation
  roadside(){    
    if(frameCount%100===0){
      var roadsideimg= createSprite(canvas.width-800, 100)
      var r1 = Math.round(random(1,2));
      if(r1===1)
        roadsideimg.x=canvas.width-800;
      if(r1===2)
        roadsideimg.x=canvas.width-150;
     // roadsideimg.velocityY=10;
      var r2=Math.round(random(1,2));
      if(plr_bg===1){
        if(r2===1){
          roadsideimg.addImage(st1o1);
          roadsideimg.scale=2;
        }
        else
          roadsideimg.addImage(st1o2);
          roadsideimg.scale=2;
      }
      if(plr_bg===2){
        if(r2===1){
          roadsideimg.addImage(st2o1);
          roadsideimg.scale=10000000000000;
        }
        else
          roadsideimg.addImage(st2o2);
          roadsideimg.scale=0.3;
      }
      if(plr_bg===3){
        if(r2===1)
          roadsideimg.addImage(st3o1);
        else
          roadsideimg.addImage(st3o2);
      }
      if(plr_bg===4){
        if(r2===1){
          roadsideimg.addImage(st4o1);
          roadsideimg.scale=0.5;
        }
        else
          roadsideimg.addImage(st4o2);
          roadsideimg.scale=1.5;
      }
      if(plr_bg===5){
        if(r2===1){
          roadsideimg.addImage(st5o1);
          roadsideimg.scale=0.2;
        }
        else
          roadsideimg.addImage(st5o2);
      }
      if(plr_bg===6){
        if(r2===1){
          roadsideimg.addImage(st6o1);
          roadsideimg.scale=2;
        }
        else
          roadsideimg.addImage(st6o2);
          roadsideimg.scale=0.3;
      }

      //roadsideimg.lifetime = 500;
      rodsideobs.add(roadsideimg);

    }
    
  }

 //set track image for player
  selecttrack(){
    startpoint.visible=true;
    track.visible=true;
    if(plr_bg===1)
      track.addImage(canyon_img);
    else 
    if(plr_bg===2) 
      track.addImage(city_img);        
    else
    if(plr_bg===3)  
      track.addImage(desert_img);
    else
    if(plr_bg===4)  
      track.addImage(grass_img);
    else
    if(plr_bg===5)  
      track.addImage(snow_img);
    else
    if(plr_bg===6)  
      track.addImage(water_img);
  }

 //set car for player  
  selectplayercar(){    
    player.visible=true;    
    if(plr_car===1)
      player.addImage(car1_img);     
    else 
    if(plr_car===2)
      player.addImage(car2_img);     
    else 
    if(plr_car===3)
      player.addImage(car3_img);     
    else 
    if(plr_car===4)
      player.addImage(car4_img);     
    else 
    if(plr_car===5)
      player.addImage(car5_img);     
    else 
    if(plr_car===6)
      player.addImage(car6_img);     
      player.scale=1.5;
    }

  
  //Car collide with each other the bombspot takes place
  collideCar(){
    if(player.isTouching(enemy)){
      oxygen=oxygen-1;
      bs=createSprite(player.x,player.y)
      bs.addAnimation("bomb",bs_ani);
      bs.scale=0.3;          
      bs.x=player.x;
      bs.y=player.y;       
      bs.visible=true;
      bs.lifetime=20;
      enemy.destroyEach();
      track.velocityY=0;
      player.visible=false;
      gameState=5;
      for (var i = 0; i < enemy.length; i++) {
      enemy.get(i).velocityY=0;
      enemy.get(i).visible=false;
      }
      setTimeout(function() {
      gameState=4;
      track.visible=false;
      player.visible=false;
      for (var i = 0; i < rodsideobs.length; i++) 
      rodsideobs.get(i).visible=false; }, 2000);   
      
    }         
  }
        

}
