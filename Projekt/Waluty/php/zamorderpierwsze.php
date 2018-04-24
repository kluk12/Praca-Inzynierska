<?php
//$q = $_GET['id'];
//$q = $_POST['id'];
//$q = 'a';
if (isset($_POST['id']))
   $q = $_POST['id']; 
    
$con = mysqli_connect('localhost','root','','gielda');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$datazam =date("Y-m-d:h:i:s");
$id_user=1;
$btc;
$ltc;
    $omg;
    $usdt;
mysqli_select_db($con,"gielda");
$sql="  SELECT * FROM `open_orders`WHERE `id_oo`='$q'";

  //$sql.="SELECT * FROM `orders_history`  WHERE `id_oh`='25'"; WHERE `id_oo`='44'

$result = mysqli_query($con,$sql);
$sql21="  SELECT * FROM `account_balans`WHERE `id_user`='$id_user'";
$result2 =  mysqli_query($con,$sql21);
while($row = mysqli_fetch_array($result2)) {
    $id_ab  =    $row['id_ab'] ;
     $waluta=    $row['waluta'] ;
     $symbol  =    $row['symbol'] ;
     $balans =    $row['balans'] ;
     $id_userab  =    $row['id_user'] ;
    if ($symbol =="BTC"){$btc =$balans;}
    if ($symbol =="LTC"){$ltc =$balans;}
    if ($symbol =="OMG"){$omg =$balans;}
    if ($symbol =="USDT"){$usdt =$balans;}
}
    
while($row = mysqli_fetch_array($result)) {
      $id_oo  =    $row['id_oo'] ;
     $odata  =    $row['data'] ;
     $otyp   = $row['typ'];
     $okurs  =  $row['kurs'] ;
     $ojednostki= $row['jednostki'] ;
     $olimit =  $row['limit'] ;    
    $omarket =  $row['market'] ;    
    $id_user =  $row['id_user'] ; 
     $total=  $row['total'] ;    



$mp=substr($omarket, 0, 3);//btc
$mk=substr($omarket, 4, 7);//ltc
    
  echo  $ojednostki.'spr'.$okurs."a " .$q."  ",$btc ."  ",$ltc."  ",$omg."  ",$usdt;
  
   
  $sql2="INSERT INTO `orders_history`( `data_otw`, `data_zam`, `typ`, `kurs_otw`, `jednostki`, `id_User`, `market`) VALUES ('$odata','$datazam','$otyp','$okurs','$ojednostki','$id_user','$omarket')";

if (mysqli_query($con,$sql2))    $tt= 2; else      $tt= 0;
//zrobić te zapytania 
    
    $sql21="  SELECT * FROM `account_balans`WHERE `id_user`='$id_user'";
    if (mysqli_query($con,$sql21) ) {        $tt.= 1;}else   $tt.= 0;
     if($otyp==0){
        if ($omarket== 'BTC-LTC'){//spr -
            $ojednostki =$ltc - $ojednostki ;
            $total =$btc + $total ;
        }
    }
    if($otyp==1){  
        if ($omarket== 'BTC-LTC'){
            $ojednostki =$btc - $ojednostki;
            $total =$ltc +$total;
        }}
$sql3="UPDATE `account_balans` SET `balans`='$ojednostki' WHERE `symbol`='$mk'";// zmiena z blokiem
//$sql3="UPDATE `account_balans` SET `balans`='$ojednostki' WHERE `symbol`='$mk'";// zmiena z blokiem
$sql32="UPDATE `account_balans` SET `balans`='$total' WHERE `symbol`='$mp'";
//$sql32="UPDATE `account_balans` SET `balans`='$total' WHERE `symbol`='$mp'";
//UPDATE `account_balans` SET `balans`='$total',`id_user`='1' WHERE `symbol`='$mp UPDATE `account_balans` SET `balans`='$ojednostki',`id_user`='1' WHERE `symbol`='$mk'
if (mysqli_query($con,$sql3) ) {        $tt.= 3;}else   $tt.= 0;
if (mysqli_query($con,$sql32) ) {        $tt.= 4;}else   $tt.= 0;
$sql4="DELETE FROM `open_orders` WHERE `id_oo`=' $id_oo'";//id polepszyć

if (mysqli_query($con,$sql4)) {       $tt.= 6;}else   $tt.= 0;

echo $tt,"  ". $id_oo."  " , $odata."  " , $otyp."  "  , $okurs ."  ", $ojednostki."  ",  $total."  ",  $omarket."  ",  $id_user ."  ",$datazam ."  ",$btc ."  ",$ltc."  ",$omg."  ",$usdt;


}

echo $q;
mysqli_close($con);
?>
