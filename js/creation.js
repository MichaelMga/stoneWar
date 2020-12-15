
function build(player, character){

    alert(player.name + " launched the construction of a " + character.name);

    //First, check if you have the available resources to build this character 

    if(availableResources(player,character) == false){

       alert('vous n avez pas assez de resources pour construire ce personnage!');

    } else {

        let newCharacter = new Character(player, character);


        player.buildingQueue.push(newCharacter);
            

        if(player.buildingQueue.length == 0){

            processNextElementInBuildQueue(player);
    
        }


        //IF THE HUMAN BUILDS, THE AI REACTS BY BUILDING A 'predator' (character beating the building character)
    
        
        if(player == human){

            launchParallelBuilding(character);  

        }


        

    }
    
    //if you have enough resources, launch build

    
        //else : 'you don't have enough resources to build!'
}

//stop to build if we have more than 5 x the opponents army



function processNextElementInBuildQueue(player){  
    
    
    
  if(player.buildingQueue.length == 0){
   
    //nothing to build => stop the recursive process
    return;

    } else{

        if(availableResources(AI, character.predator) == false){
            //send the druid fill stoneStocks
            moveAndFillStocks();
    
            //then, process the next element
      
            processNextElementInBuildQueue(player);
           
        } else { 
    
               let buildingTime = player.buildingQueue[0].buildingTime;
          
               setTimeout(function(){
       
                   //remove the first element of the queue
                  
                  //launch the process of the next element
       
                player.buildingQueue(player);
       

            }, buildingTime);
            
        }
        
        
    }


}




function launchParallelBuilding(character){


       //bubble up (priority queue)

      //for the length of the queue, starting from the bottom 

         let newCharacter = new Character(character.predator);
        
         newCharacter.buildingType = parallel;

         AI.buildingQueue.push(newCharacter);


         //while the position of I is less than the next players


         //knowing that the last index currently stores the new player

          
           for(i=AI.buildingQueue.length-1; i >= 0 ; i--){

             let queue = AI.buildingQueue;

               if(queue[i-1].buildingType != parallel){

                   //swap elements

                  queue[i] = queue[i-1];

                  queue[i - 1] = newCharacter; 

               } else {

                  //stop the loop, you found where to insert the element

                  break;
               }

           } 

  }


function availableResources(player, character){

    let availableResources = true;

    for(i=0; i < character.recipe.length; i++){

       if( player.stones[i].length < character.recipe[i].length){
           
           availableResources = false;

           alert('vous n avez pas les ressources pour construire ce charactere' );

           break;

       }
  }


    if(availableResources == true){

        return true;

    } else {

        return false;
    }

 }




 function moveAndFillStocks(){
       
     AI.stones[0] += 50;
     AI.stones[1] += 50;

 }



 function launchStoneCollectIteration(stone){

    //collect 10 red stones , collect 10 blue stones

    collectIterationIndex--;
   
    moveAndHarvest( AIDruidDOM , stone.offsetLeft);

    //give the time to the druid to perform the current stone collection
    
    let iterationInterval;

    
    iterationInterval = setInterval(function(){  

      if( AIDruidHarvesting != true){   

        clearInterval(iterationInterval);

          
        if(collectIterationIndex != 1){

           if(collectIterationIndex > 5){

            launchStoneCollectIteration(AIBlueStone);

           } else {

             launchStoneCollectIteration(AIRedStone);

            }

        }

    }   
  }, 1000);
 
}


