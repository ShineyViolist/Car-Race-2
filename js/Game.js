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

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    Player.getInfo();
    console.log(info);
    if(info !== undefined){
      var position = 120;
      for(var i in info){
        if(i === "player" + player.index){
          fill("blue");
        }else{
          fill("black");
        }
        position = position + 30;
        textSize(20);
        text(info[i].name + ":" + info[i].distance, 200,position);
      }
    }
    if(keyDown(UP_ARROW) && player.index !== null){
        player.distance = player.distance + 10;
        player.update();
    }
  }
}
