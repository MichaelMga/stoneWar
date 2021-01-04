
<!DOCTYPE html>


<html>



<style>



 body{

  background: blue;

 } 




#humanDiv a{

  position: absolute;
  height: 15%;
  width: 5vw;
  bottom: 5vh;
  left: 100px;
  height: 90px;

}


#humanDiv a div{

  height: 15%;
  width: 5vw;
  height: 100%;
  background: green;

}




#aiDiv{

  

} 



#aiDiv div{

  position: absolute;
  height: 15%;
  width: 5vw;
  bottom: 5vh;
  left: 800px;
  height: 10vh;

  background: yellow;

}



#movementDiv{

    position: absolute;
    background: brown;
    top: 95vh;
    left: 0px;
    width: 100%;
    height: 5%;

    display : flex;

    justify-content: space-around;

}


#movementDiv *{


  height: 100%;

  width: 5%;

  background: purple;



}


a{
  cursor: pointer;
}



</style>

 




<head>


</head>


<body>

<div id='humanDiv'>



</div>



<div id='aiDiv'>



</div>




<div id='movementDiv'>


     <a onclick='moveCharacter(event)'><div id='movementPoint1'>point</div></a>
     <a onclick='moveCharacter(event)'><div id='movementPoint2'>point</div></a>
     <a onclick='moveCharacter(event)'><div id='movementPoint3'>point</div></a>
     <a onclick='moveCharacter(event)'><div id= 'movementPoint4'>point</div></a>
     <a onclick='moveCharacter(event)'><div id= 'movementPoint4'>point</div></a>
     <a onclick='moveCharacter(event)'><div id= 'movementPoint5'>point</div></a>
     <a onclick='moveCharacter(event)'><div id= 'movementPoint6'>point</div></a>
     <a onclick='moveCharacter(event)'><div id= 'movementPoint7'>point</div></a>
   

      

</div>


<script src='https://code.jquery.com/jquery-3.5.1.min.js'></script>



<script>

     var none = "none";


    var selectedCharacter = none;






   //CLASSES





     var soldier = 'soldier';
     var knight = 'knight';
     var berseker = 'berseker';
     var magician = 'magician';



     var id = 0;






      var humanDiv = document.getElementById("humanDiv");

      var aiDiv = document.getElementById("aiDiv");



      var humanArmy = [];

      var aiArmy = [];



     


     //CLASSES



     function Soldier(){


       this.prey = berseker;

       this.attack = 50;

       this.lifePoints = 100;

       id+= 1;

       this.id = id;


     }


     function Knight(){


       this.prey = berseker;

       this.attack = 80;

       this.lifePoints = 30;

       id+= 1;

       this.id = id;


     }



     function Berseker(){

       
       this.prey = knight;

       this.attack = 50;

       this.lifePoints = 80;

       id+= 1;

       this.id = id;


     }








    var AIarmy;
    var humanArmy;


    

  const MAXENTRIES = 10000;



  //CHARACTERS DICTIONNARY


  var charactersDictionnary = new Array(MAXENTRIES);

  //DAMAGE DICTIONNARY

  //This dictionnary is not initialized, and will be used for the totality of the game

  var battleScoreDictionnary = new Array(MAXENTRIES);


  var configScoreDictionnay = new Array(MAXENTRIES);

  
  //This value is initialized at the start of each search



  var bestConfigScore = 0;


  var bestConfigArray = [];




   
   //find the best possible configuration

    window.onload = function(){

         buildArmies();
         

         searchForBestConfig(aiArmy, humanArmy, []); 


        //now, we have a best config. We can launch the attack.



        deployConfig(bestConfig);







    }




   function searchForBestConfig( army, opponentArmy, configArray){


         if(opponentArmy.length == 0 || army.length == 0){

             console.log(configArray);
             
             //calculate the score of the config array


             //If it is the best array, store it


             //First, we could check if we already computed that list => even though elements are not in order (which doesnt matter).

             //So, if we hash all the hashes (knowing many of those dont need to be rehashed), and see that this config is already in the dictionnary, no need to recompute the score


             
             var score = getConfigScore();

              
             if(score > bestConfigScore){

                bestConfigScore = score;

                bestConfig = configArray;

             }
            

             //So, we first need to calculate its score


      
             return;

         }



         var updatedArmy;
        
          
          for(i=0; i < army.length ; i++){



              updatedArmy = army.slice();

              updatedArmy.splice(0,1);



              var updatedOpponentArmy = opponentArmy.slice();

                updatedOpponentArmy.splice(0,1);

              
              var updatedConfigArray = configArray.slice();

                updatedConfigArray.push([army[i] , opponentArmy[0] ]);
            
               searchForBestConfig( updatedArmy, updatedOpponentArmy, updatedConfigArray);


          }

   }




   function getConfigScore(){


    return 50;


   }





   function buildArmies(){

     var obj;
     var DOMel;

     var link;



       //Human


     obj = new Soldier();
     humanArmy.push(obj);

     charactersDictionnary[obj.id % MAXENTRIES] = obj;

      
     DOMel = document.createElement("div");
     DOMel.setAttribute("id", obj.id);
     DOMel.setAttribute("onclick", "selectCharacter(event)");

     link = document.createElement("a");     
     link.append(DOMel)
     humanDiv.append(link); 


     
     obj = new Berseker();
     humanArmy.push(obj);

     charactersDictionnary[obj.id % MAXENTRIES] = obj;



     DOMel = document.createElement("div");
     DOMel.setAttribute("id", obj.id);
     DOMel.setAttribute("onclick", "selectCharacter(event)");

     link = document.createElement("a");

     link.style.left = '400px';

     link.append(DOMel)
     humanDiv.append(link); 


     obj = new Berseker();
     humanArmy.push(obj);

     charactersDictionnary[obj.id % MAXENTRIES] = obj;




     DOMel = document.createElement("div");
     DOMel.setAttribute("id", obj.id);
     DOMel.setAttribute("onclick", "selectCharacter(event)");

     link = document.createElement("a");

     link.style.left = '300px';

     link.append(DOMel)
     humanDiv.append(link); 



     

     obj = new Berseker();
     humanArmy.push(obj);
     charactersDictionnary[obj.id % MAXENTRIES] = obj;

     DOMel = document.createElement("div");
     DOMel.setAttribute("id", obj.id);
     DOMel.setAttribute("onclick", "selectCharacter(event)");

     link = document.createElement("a");

     link.style.left = '200px';

     link.append(DOMel)
     humanDiv.append(link); 






      //AI

     
     obj = new Berseker();
     aiArmy.push(obj);
     charactersDictionnary[obj.id % MAXENTRIES] = obj;

     DOMel = document.createElement("div");
     DOMel.setAttribute("id", obj.id);
     aiDiv.append(DOMel);


         
     obj = new Knight();
     aiArmy.push(obj);
     charactersDictionnary[obj.id % MAXENTRIES] = obj;

     DOMel = document.createElement("div");
     DOMel.setAttribute("id", obj.id);
     aiDiv.append(DOMel);

     
     obj = new Knight();
     aiArmy.push(obj);
     charactersDictionnary[obj.id % MAXENTRIES] = obj;

     DOMel = document.createElement("div");
     DOMel.setAttribute("id", obj.id);


     aiDiv.append(DOMel);


     obj = new Knight();
     aiArmy.push(obj);
     charactersDictionnary[obj.id % MAXENTRIES] = obj;

     DOMel = document.createElement("div");
     DOMel.setAttribute("id", obj.id);


     aiDiv.append(DOMel);
      

     obj = new Knight();
     aiArmy.push(obj);
     charactersDictionnary[obj.id % MAXENTRIES] = obj;

     DOMel = document.createElement("div");
     DOMel.setAttribute("id", obj.id);


     aiDiv.append(DOMel);
      
      
      

   }
 



   
   function deployConfig(config){





       var battle; 
      
      for(i=0; i < config.length ; i++){

        battle = config[i];

        moveAndAttack(battle[0] , battle[1]);


      }


   }








function moveAndAttack(attacker, victim){

        var attackerDOM = $("#" + attacker.id)
        var victimDOM = $("#" + victim.id);


        movement(attackerDOM, victimDOM, true);

}





    

 function movement(characterDOM, target , attack){


     alert('the character is moving')

  
      var characterLeft = characterDOM.offset().left;
      var targetLeft = target.offset().left;


      var originLeft = characterLeft;


      alert('character left ' + characterLeft)


      alert('target left ' + targetLeft);


       
       var moveInterval;

       if(characterLeft > targetLeft){

            moveInterval = setInterval(function(){

             characterLeft -= 10;

             characterDOM.css("left" , characterLeft);

             
             if( (characterLeft - targetLeft) <= 20 ){



                if(attack == true){

                  
                   //alert('attack');


                }


                clearInterval(moveInterval);

               


             }

         

         
            },10)


       } else {


           moveInterval = setInterval(function(){

             characterLeft += 10;

             console.log(characterLeft);

             characterDOM.css("left" , characterLeft);

             if( (targetLeft - characterLeft) <= 100 ){


                 if(attack == true){

                  
                   //alert('attack');


                  } else {

                    //handle



                  }




                clearInterval(moveInterval);

               




             }

         
            },10)



       }


 }








 function moveCharacter(event){


    if(selectedCharacter == none){

      alert('vous n avez pas selectionné de personnage');

      return;

    }




     alert('movement!');
     

     //use a jquery selector, to use the function offset() in the movement function



     alert('id ' + event.target.id);


     var destination = $("#" + event.target.id);


     alert('destination=>' + destination)


     movement(selectedCharacter , destination, false);


     //init the selection for further movement


     selectedCharacter = none;


 }




function selectCharacter(event){
   

    selectedCharacter = $("#" + event.target.id);


}





function getCharacterFromDOM(DOMelement){

      //each character is stored into a dictionary

      var characterObject = probeCharactersDictionnary(DOMelement.id);

      return characterObject;

}



function probeCharactersDictionnary(id){

    if(charactersDictionnary[id % MAXENTRIES] != undefined){

      //check for collision => quadratic probing

      return charactersDictionnary[id % MAXENTRIES];

    } else {

         //this character doesnt exist

        return false;
    }
}




</script>
  

</body>
</html>
