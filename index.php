<?php

  include 'header.php';

?>




 <div id='backgroundDiv'>


      <div id='landDiv1'>

           <div class='bluePortal' style='background: blue'><button id='mybutton' onclick='harvest(event)' style='position: relative; z-index: 2' >harvest</button></div>
           <div id='redPortal' class='redPortal' style='background: red'><button id='mybutton' onclick='harvest(event)' style='position: relative; z-index: 2' >harvest</button></div>
           <div id='castle' style='background: purple; height: 80%'></div>
      
      </div>

      

      <div id='blackStone' style='width: 5%'>
             <button id='mybutton' onclick='harvest(event)' style='position: relative; z-index: 2' >harvest</button>
      </div>

    


      <div id='landDiv2'>
            
           <div id='castle' style='background: purple; height: 80%'></div>
           <div class='redPortal' style='background: red'><button id='mybutton' onclick='harvest(event)' style='position: relative; z-index: 2' >harvest</button></div>
           <div class='bluePortal' style='background: blue'><button id='mybutton' onclick='harvest(event)' style='position: relative; z-index: 2' >harvest</button></div>

      </div>


      
      <div id='unitiesDiv' style='position: absolute; top: 0px; left: 0px; height: 100%; width: 300vw; background: none'>
            
            
            <a onclick='selectCharacter(event)' style='cursor: pointer'><div id='warrior' style='position:absolute; top: 80%; left: 80vw; height: 20%; width: 2vw; background: green;'>
            </div></a>


               
            <a onclick='selectCharacter(event)' style='cursor: pointer'> 
            
               <div id='harvester' style='position:absolute; top: 80%; left: 60vw; height: 20%; width: 2vw; background: yellow'>                
                </div>
            
            </a>


      </div>
       




 
 </div>







 <script src ='js/jquery.js'></script>







 <script>


        var selectedCharacter = null;

        var warrior = 'warrior';

        var harvester = 'warrior';

   


        


    window.onload = function(){

        aiThinking();


         //build a harvester

        //build a warrior

        //build a night elve

        //build a knight

    }




 function aiThinking(){
     
    console.log('AI is thinking...');
   
    thinkAndBuild();

 }





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

                alert('the harvester collected 3 stones');

                stoneCollected();

                character.style.opacity = 1;


                }, 2000);
    
               clearInterval(moveInterval);

         }
        
        } , 20 );



     } else {moveInterval = setInterval(
        
        
      function(){ 

       console.log('movement...');



      

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








 </script>











<?php

   include 'footer.php';

?>