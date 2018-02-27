<?php
   class Emp {
       public $name = "";
       public $hobbies  = "";
       public $birthdate = "";
   }

$a =34.54;
   $e = new Emp();
   $e->name = $a;
   $e->hobbies  = "sports";
 
   $e->birthdate = date('m/d/Y h:i:s a', strtotime("8/5/1974 12:20:03"));

   echo json_encode($e)       ;
?>