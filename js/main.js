var selectedCharacter = null;
var harvester = 'warrior';
var humanDruidAttacked = false;
 


window.onload = function(){

  aiThinking();
  
  buildInitialArmies();


  setTimeout(function(){
     
    checkForArmySuperiority();

    buildMassiveArmy();

   }, 3000)

  setTimeout(function(){     
    
    checkForArmySuperiority();


  }, 10000);


}




function aiThinking(){

  console.log('AI is thinking...');
  //is there a druid moving

}



function buildInitialArmies(){

    let players = [AI, human];

    for(playerIndex = 0; playerIndex < 2; playerIndex++){  

      let player = players[playerIndex];

      //looper sur les deux dernieres sections
      
      for(i=1; i < 4;i++){

        for(n=0; n < 5; n++){

          let sectionType = charactersArray[i];
 
          let newCharacter = new Character(player, sectionType);
  
          player.army[i].push(newCharacter);
  
          addCharacterOnGui(player , newCharacter);

       }

     }

        //Créer le druide de chaque joueur

        let newDruid = new Character(player,druid);
        player.army[druid.index].push(newDruid);
        addCharacterOnGui(player, newDruid);


          if(player == AI){


            //select the last element created in the array, and declare it as a druid killer

            let knightDruidKiller = new Character(AI, knight);
            
             AI.druidKillers.push(knightDruidKiller);

             addCharacterOnGui(AI, knightDruidKiller);


             //after that, remove it from the initial array
             

          //take one archer, and one warrior and insert it into the array.

        }
        
    }




    humanDruid = human.army[druid.index][0];


    AIDruid = AI.army[druid.index][0];

    

}



function harvest(event){


if (selectedCharacter == null){


alert ('you didnt select any character');


} else {


  let stoneLeft = event.target.parentElement.offsetLeft;

  let initialPositionLeft = selectCharacter.offsetLeft;



   console.log('the harvester is moving...');

   moveAndHarvest(selectedCharacter, stoneLeft);


//Launch the Harvest timeout. Once the harvester is done harvesting , move the character back


    selectedCharacter = null;

   }

}





function selectCharacter(event){


     if(selectedCharacter == event.target){

         alert('mouvement annulé!');

         selectedCharacter = null;

    } else {     

        selectedCharacter = event.target;

   }

}


function addCharacterOnGui(player, character){   

    let a = document.createElement('a');
    a.setAttribute('onclick' , 'selectCharacter(event)');
    let newCharacter = document.createElement('div');
    
    newCharacter.setAttribute("class" , character.type.name + ' ' + player.name + '_' + character.type.name);
    
     if(character.type != druid){

      newCharacter.setAttribute("id" , player.name + '_' + character.type.name + '_' + character.id);
         
     } else {

      newCharacter.setAttribute("id" ,  player.name + '_' + character.type.name);
         
     }


    newCharacter.innerHTML = character.type.name + character.id;

    a.append(newCharacter);
    document.getElementById(player.name + '_div').append(a);   
    
}






function moveAndHarvest(character, destinationLeft){

  let characterLeft = character.offsetLeft;
 //the character right value needs to go down until it's close to this value : then, it disappears
 let moveInterval;

 
 if( characterLeft > destinationLeft ){

    moveInterval = setInterval(function(){ 

    characterLeft -= 3;
    character.style.left = characterLeft + 'px';
    console.log(characterLeft);

  
  if( (character.offsetLeft - destinationLeft) < 50){         

    character.style.opacity = 0;

    setTimeout(function(){
    
      alert('you collected 10 stones');
      stoneCollected();
      character.style.opacity = 1;

      }, 2000);
    
     clearInterval(moveInterval);
   }

  } , 20 );



} else {


moveInterval = setInterval(


function(){ 



if(characterLeft > destinationLeft/2){

if(druidKillersComing == false){  
  
   druidKillersComing = true;
   launchDruidAssault();
   
}


if(humanDruid.attacked == true ){

  clearInterval(moveInterval);
}


}





characterLeft += 3;

character.style.left = characterLeft + 'px';




if( (character.offsetLeft - destinationLeft) > 50){
       
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

}











function stoneCollected(){

alert(' stones were collected...');


}






function standingArmyAttack(target){

//move army and attack the druid


//attack an army


//attack a castle


}


function getCharacterDomElement(player, character){

     if(character.type == druid){

        return document.getElementById(player.name + "_" + character.type.name );

     } else {
      
       return document.getElementById(player.name + "_" + character.type.name + "_" + character.id );

     }

}












//BUILD HUMAN ARMY (dev)





let humanCharacter;

//3 knights

humanCharacter = new Character(human, knight);
human.army[1].push(humanCharacter);
addCharacterOnGui(human , humanCharacter);

humanCharacter = new Character(human, knight);
human.army[1].push(humanCharacter);
addCharacterOnGui(human , humanCharacter);


humanCharacter = new Character(human, knight);
human.army[1].push(humanCharacter);
addCharacterOnGui(human , humanCharacter);


//3 soldiers


humanCharacter = new Character(human, soldier);
human.army[1].push(humanCharacter);
addCharacterOnGui(human , humanCharacter);

humanCharacter = new Character(human, soldier);
human.army[1].push(humanCharacter);
addCharacterOnGui(human , humanCharacter);


humanCharacter = new Character(human, soldier);
human.army[1].push(humanCharacter);
addCharacterOnGui(human , humanCharacter);


//3 bersekers


humanCharacter = new Character(human, berseker);
human.army[1].push(humanCharacter);
addCharacterOnGui(human , humanCharacter);

humanCharacter = new Character(human, berseker);
human.army[1].push(humanCharacter);
addCharacterOnGui(human , humanCharacter);

humanCharacter = new Character(human, berseker);
human.army[1].push(humanCharacter);
addCharacterOnGui(human , humanCharacter);






















function buildMassiveArmy(){
  let AICharacter;
  
  //3 knights
  
  AICharacter = new Character(AI, knight);
  AI.army[1].push(humanCharacter);
  addCharacterOnGui(AI , AICharacter);

  
  AICharacter = new Character(AI, knight);
  AI.army[1].push(humanCharacter);
  addCharacterOnGui(AI , AICharacter);

  
  AICharacter = new Character(AI, knight);
  AI.army[1].push(humanCharacter);
  addCharacterOnGui(AI , AICharacter);

  
  AICharacter = new Character(AI, knight);
  AI.army[1].push(humanCharacter);
  addCharacterOnGui(AI , AICharacter);
  
  
  
  //3 soldiers
  
  
  AICharacter = new Character(AI , soldier);
  AI.army[1].push(AICharacter);
  addCharacterOnGui(AI , AICharacter);
  
  AICharacter = new Character(AI , soldier);
  AI.army[1].push(AICharacter);
  addCharacterOnGui(AI , AICharacter);
  
  
  AICharacter = new Character(AI , soldier);
  AI.army[1].push(AICharacter);
  addCharacterOnGui(AI , AICharacter);
  
  AICharacter = new Character(AI , soldier);
  AI.army[1].push(AICharacter);
  addCharacterOnGui(AI , AICharacter);
  
  
  //4 bersekers
  
  AICharacter = new Character(AI , berseker);
  AI.army[1].push(AICharacter);
  addCharacterOnGui(AI , AICharacter);
  
  AICharacter = new Character(AI , berseker);
  AI.army[1].push(AICharacter);
  addCharacterOnGui(AI , AICharacter);
  
  AICharacter = new Character(AI , berseker);
  AI.army[1].push(AICharacter);
  addCharacterOnGui(AI , AICharacter);
  
  AICharacter = new Character(AI , berseker);
  AI.army[1].push(AICharacter);
  addCharacterOnGui(AI , AICharacter);
  
  
  
  


}





















