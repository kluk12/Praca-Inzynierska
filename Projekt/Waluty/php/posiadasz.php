<?php
$q = $_GET['q'];


$con = mysqli_connect('localhost','root','','gielda');
if (!$con) {
    
    die('nie można się połączyć: ' . mysqli_error($con));
}
//echo $q;
 
mysqli_select_db($con,"gielda");
$sql="SELECT balans FROM `account_balans` WHERE `symbol`='$q'";
$result = mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {
   
    echo " " . $row['balans'] . " ";
}
mysqli_close($con);
?>