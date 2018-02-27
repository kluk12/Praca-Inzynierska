<?php  

$have = $_POST['have'];
$cena = $_POST['cena'];

// odbieramy dane z formularza 
$total = $_POST['total']; 

$data =date("Y-m-d:h:i:s");
$type = $_POST['typ'];
   //echo $cena;

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gielda";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   // $sql = "INSERT INTO `user`( `email`, `haslo`, `imie`, `nazwisko`) VALUES ('$email','$has','$imie','$naz')";
   // $sql = "INSERT INTO `orders_history`( `data_otw`, `data_zam`, `typ`, `kurs_otw`, `jednostki` ,`id_User`,`market`) VALUES ('$data','$data','$type','$cena','$have','1''BTC-LTC')";
    $sql = "INSERT INTO `open_orders`( `data`, `typ`, `kurs`, `jednostki`,  `limit`,`total`, `market`) VALUES ('$data','$type','$cena','$have','null','$total','BTC-LTC')";
   // $sql = "SELECT * FROM `orders_history`";
    
    
    // use exec() because no results are returned
    $conn->exec($sql);
   echo "ok";

 
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;


?>
