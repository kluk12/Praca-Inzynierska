<?php
//$q = intval($_GET['q']);

$con = mysqli_connect('localhost','root','','gielda');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$datazam =date("Y-m-d:h:i:s");



mysqli_select_db($con,"gielda");
$sql="  SELECT * FROM `open_orders` WHERE `id_oo`='44'";

  //$sql.="SELECT * FROM `orders_history`  WHERE `id_oh`='25'";

$result = mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {
  $id_oo  =    $row['id_oo'] ;
 $odata  =    $row['data'] ;
 $otyp   = $row['typ'];
 $okurs  =  $row['kurs'] ;
 $ojednostki= $row['jednostki'] ;
  $olimit =  $row['limit'] ;    
  $omarket =  $row['market'] ;    
  $id_user =  $row['id_user'] ;    
    
}

  $sql2="INSERT INTO `orders_history`( `data_otw`, `data_zam`, `typ`, `kurs_otw`, `jednostki`, `id_User`, `market`) VALUES ('$odata','$datazam','$otyp','$okurs','$ojednostki','$id_user','$omarket')";

if (mysqli_query($con,$sql2))    $tt= true; else      $tt= false;

$sql3="UPDATE `account_balans` SET `balans`='$okurs',`id_user`='$id_user' WHERE `symbol`='$omarket'";

if (mysqli_query($con,$sql3) ) {        $tt.= true;}else   $tt.= false;
$sql4="DELETE FROM `open_orders` WHERE `id_oo`=''$id_oo";

if (mysqli_query($con,$sql4)) {       $tt.= true;}else   $tt.= false;

echo $tt,"  ". $id_oo."  " , $odata."  " , $otyp."  "  , $okurs ."  ", $ojednostki."  ",  $olimit."  ",  $omarket."  ",  $id_user ."  ",$datazam;
mysqli_close($con);
?>
