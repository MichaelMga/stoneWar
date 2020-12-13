
function build(player, character){


    //First, check if you have the available resources to build this character 


    if(availableResources(player,character) == false){

       alert('vous n avez pas assez de resources pour construire ce personnage!');


    } else {


        player.buildingQueue.push(character);
            

        if(player.buildingQueue.length == 0){
    
            processNextElementInBuildQueue(player);
    
        }


        //IF THE HUMAN BUILDS, THE AI REACTS BY BUILDING A 'predator' (character beating the building character)
    
        
        if(player == human){

            launchParallelBuilding();
           
        }


        

    }
    
    //if you have enough resources, launch build

    
        //else : 'you don't have enough resources to build!'
}

//stop to build if we have more than 5 x the opponents army



function processNextElementInBuildQueue(player){


     if(processElementInBuildingQueue.length == 0){

        //nothing to build => stop the recursive process
         
        break;


     } else {

        let buildingTime = player.buildingQueue[0].buildingTime;

   
        setTimeout(function(){

            //remove the first element of the queue
           
           //launch the process of the next element

            processNextElementInBuildingQueue(player);


        }, buildingTime);
   
     }

}




function launchParallelBuilding(character){

    if(availableResources(AI, character.predator) == true){

       //add this character to the "to do queue"


       toDoQueue.push( new Character(character.predator));
    
       //send the druid fill stoneStocks

       fillStocks();

    } else {

        //IF THE CHARACTER IS TITAN, OR HYPOGRIFF, we actually multiply the operation


         //bubble up (priority queue)

         //for the length of the queue, starting from the bottom 

         let newCharacter = new Character(character.predator);
         AI.buildingQueue.push(newCharacter);


         //while the position of I is less than the next players


         //knowing that the last index currently stores the new player

          
           for(i=AI.buildingQueue.length-1; i > 0 ; i--){

             let queue = AI.buildingQueue;

               if(queue[i-1].creationType != parallel){

                   //swap elements

                  queue[i] = queue[i-1];

                  queue[i - 1] = newCharacter; 

               } else {

                  //keep the element there

                  break;
               }

           } 
        }
    }


function availableResources(player, character){

    let availableResources = true;

    for(i=0; i < character.recipe.length; i++){

       if( player.stones[i].length < character.recipe[i].length){
           
           availableResources = false;

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

    collectIterationIndex = 5;

    launchStoneCollectIteration();

 }


 function launchStoneCollectIteration(){

    //collect 10 red stones , collect 10 blue stones

    moveAndHarvest(player, stone.left);


    //give the time to the druid to perform the current stone collection
    
    let iterationInterval;

    iterationInterval = setInterval(function(){  

      if( AIdruidHarvesting != true){   
          
        if(collectIterationIndex != 0){

           if(collectIterationIndex > 5){

            launchStoneCollectIteration(redStone);

           } else {

              launchStoneCollectIteration(blueStone);

            }
        } else {

         //else , end of the iteration

      }
    }   
  }, 500);
 }




 
 launchAiReflection(){
      
    //when the other player builds, those elements are actually pushed at the top of the queue (it's actually a priority queue)

    //So, the elements are actually enqueued, and bubble up, until there is another parallel element





 }
 
