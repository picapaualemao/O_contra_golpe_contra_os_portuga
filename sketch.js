var ladrao,ouro,lazer1,lazer2,lazer3,paredes
var estadoJogo

function setup() {
  createCanvas(400, 400);
montarJogo()
estadoJogo = 'parado'  
}

function draw() {
  background(0);
  
  drawSprites()
  
  if(estadoJogo == 'parado'){
    
    textSize(20)
    fill('white')
    text('Presione ESPAÇO para começar!',60,180)
    
    if(keyDown('SPACE')){
      lazer1.velocityY = 8
      lazer2.velocityX = 8
      lazer3.velocityX = 8
      
      estadoJogo = 'play'
    }
    
  }
  
  if(estadoJogo == 'play'){
    lazer1.bounceOff(paredes)
    lazer2.bounceOff(paredes)
    lazer3.bounceOff(paredes)
    
    if(keyDown('left')) {
      
     ladrao.x = ladrao.x -4 
    }else if(keyDown('right')){
      
      ladrao.x = ladrao.x +4
      }else if(keyDown('up')){
        
        ladrao.y = ladrao.y -4
      }else if(keyDown('down')){
        
        
        ladrao.y = ladrao.y +4
      } 
    
    
   ladrao.collide(paredes)
    
    if(
    ladrao.isTouching(lazer1)||
    ladrao.isTouching(lazer2)||
    ladrao.isTouching(lazer3) ) {
    estadoJogo = "game0ver"
      }
    
    if(ladrao.isTouching(ouro)){
      estadoJogo = "winner"
    }
    
    
    
    
      
  }
  
  if(estadoJogo == 'game0ver'){
    fimDeJogo()
    fill('blue')
    textSize(20)
    text("Você vacilou e os portuga",70,200)
     textSize(20) 
   fill('red') 
    text("te pegaram no flagra",100,225)
  
    fill('white')
    textSize(15)
    text('Precione R para Reiniciar',100,250)
    
    if(keyDown('r')){
       estadoJogo = 'parado'   
       montarJogo()
    }
  
  }
    
    

  
  if(estadoJogo == 'winner'){
    fimDeJogo ()
    textSize(20)
    fill('yellow')
    text("parabéns você pegou o ouro de volta",50,200)
    fill('white')
    textSize(15)
    text('Precione R para recomeçar',100,250)
    
    if(keyDown('r')){
      
      estadoJogo = 'parado'
      montarJogo()      
    }
    
    
  }
  
  
  }

function montarJogo(){
ladrao = createSprite(200,390,20,20)
ouro = createSprite(360,20,20,20) 
lazer1 = createSprite(250,150,10,250)  
lazer1.shapeColor = "red"
lazer2 = createSprite(100,300,250,10)  
lazer2.shapeColor ="red"  
ladrao.shapeColor = "white"  
ouro.shapeColor = "yellow"
lazer3 = createSprite(100,100,250,10)  
lazer3.shapeColor = "red" 
  
paredes = createEdgeSprites()   
}



  function fimDeJogo(){
  ladrao.remove()  
  ouro.remove()
  lazer1.remove()   
  lazer2.remove()
  lazer3.remove()  
  }


