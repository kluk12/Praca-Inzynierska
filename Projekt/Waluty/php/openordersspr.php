<?php
//$q = intval($_GET['q']);

$con = mysqli_connect('localhost','root','','gielda');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}





mysqli_select_db($con,"gielda");
$sql="SELECT `id_oo`,`data`,`typ`,`kurs`,`jednostki`,`id_user`,`limit`,`total`,`market` FROM `open_orders`";
$result = mysqli_query($con,$sql);

   class Emp {
       public $id = "";
       public $data = "";
       public $typ = "";
       public $kurs = "";
       public $jednostki = "";
       public $limit  = "";
       public $market = "";
   }
 
 //$e = new Emp();
$table = array();

 
while($row = mysqli_fetch_array($result)) {
     $table[] = $row;
  // echo  json_encode( $row);
  //  echo json_encode(array_values($row));
   /*  $e = new Emp();
    $aa= $row['id_oo'];
  $e->$id = $aa;
   $e->$data = $row['data'];
   $e->$typ = $row['typ'];
   $e->$kurs = $row['kurs'];
   $e->$jednostki = $row['jednostki'];
   $e->$limit = $row['limit'];
   $e->$market  = $row['market'];
  
   /*
    echo  json_encode( $row['id_oo']) ;
    echo json_encode(  $row['data']);
    echo json_encode(  $row['typ']);
    echo json_encode(  $row['kurs']) ;
    echo  json_encode( $row['jednostki']);
    echo json_encode(  $row['limit']) ;    
    echo json_encode(  $row['market']);
/*  */
}echo json_encode($table );
//echo  json_encode($az);
//echo json_encode(array_values($row));
  // echo  json_encode( $e);
mysqli_close($con);
?>
