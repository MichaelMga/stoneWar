<?php

  include 'header.php';

?>



<div id='backgroundWrap'> 
     
   <div id='background_div'>


      <div id='land_div1'>

           <div class='bluePortal' style='background: blue'><button id='mybutton' onclick='harvest(event)' style='position: relative; z-index: 2' >harvest</button></div>
           <div class='redPortal' class='redPortal' style='background: red'><button id='mybutton' onclick='harvest(event)' style='position: relative; z-index: 2' >harvest</button></div>
           <div class='castle' style='background: purple; height: 80%'></div>
      
      </div>

      

      <div id='blackStone' style='width: 5%'>

             <button id='mybutton' onclick='harvest(event)' style='position: relative; z-index: 2' >harvest</button>
             <button style='position:absolute; top: 50%; left: 50%; z-index: 4' onclick='build(human, new Character(human, soldier) )'>Build soldiers</button>
             <button style='position:absolute; top: 50%; left: 55%; z-index: 4' onclick='build(human, new Character(human, berseker) )'>Build bersekers</button>
             <button style='position:absolute; top: 50%; left: 60%; z-index: 4' onclick='build(human, new Character(human, knight) )'>Build knights</button>


             <button style='position:absolute; top: 50%; left: 80%; z-index: 4' onclick='checkForArmySuperiority()'>check for army superiority</button>


      </div>




      <div id='land_div2'>
            
           <div id='castle' style='background: purple; height: 80%'></div>
           <div class='redPortal' id='AIRedStone' style='background: red'><button id='mybutton' onclick='harvest(event)' style='position: relative; z-index: 2' >harvest</button></div>
           <div class='bluePortal' id='AIBlueStone' style='background: blue'><button id='mybutton' onclick='harvest(event)' style='position: relative; z-index: 2' >harvest</button></div>

      </div>
 
  </div>



  <div id='groundDiv'>

       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>
       <a onclick='move(event)' style='cursor: pointer'><div></div></a>

       
      
  </div>



</div>







 <div id='unities_div'>
 
 
      <div id='AI_div'>

     </div>

     
      <div id='human_div'>

     </div>
 
 </div>


   







 <script src ='js/jquery.js'></script>








<?php

   include 'footer.php';

?>

























<div id='backgroundDiv'>


    <div></div>
    <div></div>
    <div></div>

</div>

















