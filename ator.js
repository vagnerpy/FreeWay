// codigo ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos =0;

function mostraAtor(){
  image(imagemDoAtor, xAtor,yAtor,30,30);
 // print(yAtor)// para localizar a posicao do ator para usar no placar
}


function movimentaAtor(){
  if(keyIsDown(87)){
    yAtor -=3;
  }
  if(keyIsDown(83)){
    if(podeSeMover()){
      yAtor +=3;
    }    
  }    
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter
  
  for(let i = 0; i < imagemCarros.length; i ++){
    
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro,
    alturaCarro, xAtor, yAtor, 15);
    
    if (colisao){
      voltaAtorParaPosicaoInicial();
          somDaColisao.play()
      if(pontosMaiorQueZero()){        
         meusPontos -= 1;
      }     
    }
  }
  
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(128,0,128));
  text(meusPontos, width /5, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
 return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}










































