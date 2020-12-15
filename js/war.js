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




function launchWarDeclarationCheck(){


      //every 30 s , the AI compares the army

      if(checkForArmySuperiority() == true){

        //sort all the elements using merge sort, according to their  position

        //then, once it's done : create a queue, adding elements one by one. Then, add the destruction army

        //And, send the whole intuitive army at the back.

        //add the castle assault army at the back


        sortDestructionArmy();


        for(i=0; i < intuitiveArmy.length; i++){

           destructionArmy.push(intuitiveArmy[i]);

        }


      };


      setInterval(function(){


      });


}


function checkForArmySuperiority(){

   //evaluate opponent's weaknesses

   //create a copy of the AI army (used to remove elements to which an opponent was already asigned inside the current army)

  
   let superiorArmy = true;
        

       for(i=0; i < (human.army.length - 1); i++){

              if(AI.army[predatorsArray[i].index].length < human.army[i].length){

                      //we need to launch the production of a new predator

                      build(AI, predatorsArray[i]);

                      superiorArmy = false;


              } else {

                  //add each of the characters of that array into our array

                   
                  for(charIndex = 0 ; charIndex < AI.army[predatorsArray[i].index].length; charIndex++){
                    
                       destructionArmy[predatorsArray[i].index].push(AI.army[predatorsArray[i].index][i]);

                  }

              }
        
            //check for the predator of the other character
  
       }


       if(superiorArmy == false){

        //init the destruction army

        alert('you are not strong enough');

        destructionArmy = [ [ ] , [ ] , [ ] ,  [ ], [ ]];
       }


       alert("here is the size of your destruction army sections");

       for(i=0; i < destructionArmy.length ; i++){
          
        alert(destructionArmy[i].length);

       }



    return superiorArmy;

}




function sortDestructionArmy(){


    //loop on the whole 



}




function postKillReflection(){


     //if there is an unbusy opponent :

     //we'll use a hash for it. Anytime an opponent is unbusy, the opponent will hash in. AnyTime an opponent won't be busy, this opponent will hash out.


     //So, we'll know that if the innactiveOpponentsAtWar.hash == 0 , then there are no inactive opponents, then we attack the castle.


     //if( inactiveOpponentsAtWar
       //if this is 


       //if we're at war, any new player is in the unbusy array, and all the players not in an attacking interval
              
       
}


function opponentApparitionDuringSiege(){

    //we'll loop on all the characters either attacking the castle, or unbusy (in the same array), and if we find a predator, go for it, else : equal player : attack

    //else, keep attacking the castle 




}