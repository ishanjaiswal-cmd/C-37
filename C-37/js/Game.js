class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 async start(){
    if(gameState === 0){
      player = new Player();

      var playerCountref = await database.ref('playerCount').once("value");
      if(playerCountref.exists()){
        playerCount=playerCountref.val();
       player.getCount();
      }


      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("The Game Begins",120,100)
    Player.getPlayerinfo();

    if(allPlayers !== undefined){
      var displayPosition = 130
      for(var i in allPlayers){
        if(i === "player"+player.index)
          fill("red")
          else 
          fill("black")
          displayPosition=displayPosition+20;
          textSize(10)
          text(allPlayers[i].name+":"+allPlayers[i].distance,120,distancePosition)
        }
      }
      if (keyIsDown(UP_ARROW)&& this.player.index!==null){
        player.distance+=30;
        player.update();
      }


    }
  }
