<?php  

$log = $_POST['log'];
//if(isset($_GET['ha']))
$has = $_POST['has'];

// odbieramy dane z formularza 

//echo "The time is " . date("Y-m-d:h:i:s");

//echo $log,$has;

     
$con = mysqli_connect('localhost','root','','gielda');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"gielda");
$sql="SELECT `id_User` FROM `user` WHERE `email`='$log' and`haslo`='$has'";
$result = mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {

    echo   $row['id_User']  ;
}

mysqli_close($con);
?>