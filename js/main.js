var selectedCharacter = null;
var harvester = 'warrior';
var humanDruidAttacked = false;
 


window.onload = function(){

  aiThinking();
  
  buildInitialArmies();

}



function aiThinking(){

  console.log('AI is thinking...');
  //is there a druid moving

}



function buildInitialArmies(){

    let players = [AI, human];


    for(playerIndex = 0; playerIndex < players.length; playerIndex++){  


      let player = players[playerIndex];

      //looper sur les deux dernieres sections
      
      for(i=3; i < 5;i++){

        for(n=0; n < 5; n++){

          let sectionType = charactersArray[i];
 
          let newCharacter = new Character(player, sectionType);
  
          player.army[i].push(newCharacter);
  
          addCharacterOnGui(player , newCharacter);

       }

     }

        //Créer le druide de chaque joueur

        let newDruid = new Character(player,druid);
        player.army[5].push(newDruid);
        addCharacterOnGui(player, newDruid);






          if(player == AI){

            let warriors = AI.army[warrior.index];

            let archers = AI.army[archer.index];

            //select the last element created in the array, and declare it as a druid killer

            let warriorDruidKiller = warriors[warriors.length - 1]
            
             AI.druidsKillers.push(warriorDruidKiller);

             //after that, remove it from the initial array

             AI.army[warrior.index].pop();

             
            let archerDruidKiller = archers[archers.length - 1];

            AI.druidsKillers.push(archerDruidKiller);

            AI.army[archer.index].pop();


          //take one archer, and one warrior and insert it into the array.

        }



        
        
   }

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
    newCharacter.setAttribute("class" , player.name + '_' + character.type.name);
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
    console.log('movement...');
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

console.log('movement...');


if(characterLeft > destinationLeft/2){

  if(humanDruidAttacked == false){    
     
    humanDruidAttacked = true;
     
    alert('la tour noir est en alerte!! une terrible attaque est sur le point de s abattre sur therebor');


    launchDruidAssault();


  }



}





 characterLeft += 3;

 character.style.left = characterLeft + 'px';


 console.log(characterLeft);


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








/*





function thinkAndBuild(){


for(i=0; i < humanPlayer.army.length; i++){

 let humanSection = humanPlayer.army[i];

 let humanSectionPredator = humanSection[0].prey;

 let AIsection = AI.army[humanSectionPredator.index];
     
 if(AIsection.length < humanSection.length){

     //build the difference (add the difference to the queue)
     launchCharacterBuilding(AI, character, number);

 }

}


//after that, if there still are players in the array : build a char I want to postulate and build my RPG all night, and postulate (this is going to be absolutely incredible, knowing it will allow me to build all the PHP skills I want, all the data structures skills I want....I will push it so far man. It's gonna be a real video game.)


//that'the issue with separated arrays : I can't directly check the length of an array. For that



}







function AIWarThinking(character){
   
//any time a player is built, or any time a player comes out from a battle : is there a prey available? If not, join the army.

//So, the strategy of the AI, if you can clear, clear. Whenever you are, build an army. That way, you don't let the opponent make a strategy.



for(i=0; i < inactiveOpponentsArray[character.prey.index].length ; i++){

 //check if there are any preys (this array is stored by distance from the border)
  let section = inactiveOpponentsArray[character.prey.index][i];

    if(section.length != 0){

       //attack the character

       launchCharacterAttack(character, section[0]);

       //delete the opponent from the inactive array

       section.splice(0,1);

    }

}

}




function launchCharacterBuilding(player, character, number){


let newCharacter = new Character(character);


//add the player to the queue

//if there are no element launch the function process head of queue


if(player.queue.length == 0){

queue.push(newCharacter);

processHeadofQueue(player);

} 


}



function processHeadofQueue(player){

//check head of queue.

if(player.queue.length == 0){


//if the queue is empty, the AI doesn't feel the need to build. Then : send the druid to collect dark matter.

lookForDarkMatter();


return;

} else {


setTimeout(() => {


let character = player.queue[0];

player.queue.splice(0,1);

processHeadofQueue(player);

}, character.creationTime);


}


}








function launchlongRangeAttack(attacker, attacked){

    
moveCharacter( ){

 //move the character up to the other player. Anytime the other player moves, this function will be updated.

 //Actually, move doesn't matter at all, as what matters is the css.

 //when you're close enough : attack. Meaning 

 setInterval(() => {

    //check if still at range, and still attacked by the other opponent

    //if not attacked, move back and attack

    //if attacked, launchclose range attack


    attack();

    
 }, interval);


}

}



function shortRangeAttack(attacker, attacked){


}



function attack(attacker, attacked){

attackAnimation();

}



function launchArmyAttack(){

//In this configuration, characters are harder to hurt and are stronger



}




function stopAttack(){



}




function lookForDarkMatter(){


moveCharacter(druid, blackPortal){

//once the character is there : harvest

//if attacked, destroy.

//If the other player has a druid moving towards the black stone, we send an army to kill it.

//Druids can't cope with 5 archers, and 5 warriors (solid, but not that much)

//If the druid is dead, game Over. Druids are very slow. So, when you send . When you're attacked, you can't go "vous etes attackés!!"




//So, once the druid advance => priority : kill him. Druids are strong, but very slow.


//You can then improve your castle. The AI does it if : the area is cleaned, and the other castle is attacked.

//Druids need to be protected. So, priority, when a druid is moving, group attack.


//send your 5 strongerst characters to kill it , declare a battle (knowing other players will t). Then, loop on the board again


//When there are no players to attack : attack.

}



}





//send

*/


