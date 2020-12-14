//Every 30 seconds : can I attack? Meaning, do I have at least 50 characters, and do I have a striking force beating its current force, plus 25 more other characters?

//anytime an opponent attacks our castle, we go out there to defeat it.

//anytime a druid is out there, we send 3 armies (of any character (enough to beat it)) -> balanced army

//when intuitive building, the druid checks : if there are no opponents. If so, go there.

//send druidkillers

 


  function launchDruidAssault(){

    let character;

    let humanDruidDOM = document.getElementById('human_druid');
    

    for(dkIndex = 0; dkIndex < 1; dkIndex++){
       
      character = getCharacterDomElement(AI, AI.druidKillers[dkIndex]);
      
      let characterLeft = character.offsetLeft;

      //the character right value needs to go down until it's close to this value : then, it disappears
      let moveInterval;
   
      if( characterLeft > humanDruidDOM.offsetLeft ){
   
         moveInterval = setInterval(function(){ 
         characterLeft -= 20;
         character.style.left = characterLeft + 'px';
   
      if( (character.offsetLeft - humanDruidDOM.offsetLeft) < 50){   

          alert('the druid killers are attacking the druid!!!');

          humanDruid.attacked = true;

           let attackInterval = setInterval(
            
            function(){
              
              attack(AI.druidKillers[0] , humanDruid , attackInterval)}, 
            
              1000);
              
             clearInterval(moveInterval);
   
        }
   
    } , 20 );
   

   
   
   
   } else {
   
   
   moveInterval = setInterval(
   
   
   function(){ 
   

  
    characterLeft += 3;
   
    character.style.left = characterLeft + 'px';
   
   
   
   
    if( (character.offsetLeft - humanDruidDOM.offsetLeft) > 50){
            
          character.style.opacity = 0;
       
         setTimeout(function(){
   
           alert('the harvester collected 3 stones');
   
           stoneCollected();
   
            character.style.opacity = 1;
   
   
            }, 2000);
   
           clearInterval(moveInterval);
   
        }
   
   
      } , 20 );
   
   
     }
   
   
   
    //end of druid killers loop   

    }


}

var initialVictimLifePoints;


function attack(agressor, victim , attackInterval){

  initialVictimLifePoints = victim.lifePoints;
 
  if( victim.type == druid){     
    
    victim.lifePoints -= 20;
  
  }

  if(victim.lifePoints <= 0){


    alert('the ' + victim.type.name + ' is dead');

    clearInterval(attackInterval);

    deadCharacter(victim);

  }

  alert("a " + agressor.type.name + " just attacked a " + victim.type.name + "!" + (initialVictimLifePoints - victim.lifePoints) + " of damage inflicted!" );
}


function deadCharacter(character){

  //remove this character from its array (hash id)

  //To target the element as efficiently as possible

  let found = false;

  let player = character.player;

  for(i=0 ; i < character.player.army[character.type.index].length ; i++){

    let checkedChar = character.player.army[character.type.index][i]

    if(checkedChar == character){

     let characterDOM = getCharacterDomElement(player, character);


      document.getElementById(player.name + '_div').removeChild(characterDOM.parentElement);
      

      character.player.army[character.type.index].splice(i,1);

      found = true;

      return;

    }


    if(found == false){

      console.log('probleme lors de la suppression d un joueur...le joueur na pas été trouvé');

    }




  }



}