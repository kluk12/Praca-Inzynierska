<?php  

$have = $_POST['have'];
//$have = $_GET['have'];
$cena = $_POST['cena'];
//$cena = $_GET['cena'];
$limit = $_POST['limit'];
//$limit = $_GET['limit'];

$total = $_POST['total']; 
//$total = $_GET['total']; 
$marked = $_POST['market']; 
//$marked = $_GET['market']; 

$data =date("Y-m-d:h:i:s");
$type = $_POST['typ'];
//$type = $_GET['typ'];
  

$con = mysqli_connect('localhost','root','','gielda');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"gielda");

    $sql = "INSERT INTO `open_orders`( `data`, `typ`, `kurs`, `jednostki`,  `limit`,`total`, `market`) VALUES ('$data','$type','$cena','$have','$limit','$total','$marked')";
  mysqli_query($con,$sql);
    $mp=substr($marked, 0, 3);//btc
$mk=substr($marked, 4, 7);//ltc

//    if ($type == 0){//sell
//        $sql1 ="SELECT * FROM `account_balans`";
//       $result= $conn->exec($sql1);
//         while($row = $result->fetch_assoc()) {
//             if ( $row["symbol"]==$mk){                 
//                    $b=  $row["block"];
//                    $b= $b +$have;
//                    $s=  $row["balans"];
//                    $bl =$s- $have;
//                    $sql ="UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mk'";                
//             }
//   
//    }
//    }   
    if ($cena < $limit){//($type == 1){//buy
        $sql2 ="SELECT * FROM `account_balans`";
       $result =  mysqli_query($con,$sql2);
           if (!$result) {
               printf("Error: %s\n", mysqli_error($con));
               exit();
           }
           
         while($row = mysqli_fetch_array($result))  {
             if ( $row["symbol"]==$mp){
                 
                    $b=  $row["block"];
                    $b= $b +$have;
                    $s=  $row["balans"];
                    $bl = $have - $s;
                    $sql1 ="UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mp'";
                 echo $b."  ".$s."  ". $bl;
                mysqli_query($con,$sql1);
             }
   
    }}
    //}
    
  
     echo "ok";
 
mysqli_close($con);
  
  //echo "ok";

 


?>
