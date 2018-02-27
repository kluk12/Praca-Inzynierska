<?php  




$naz = $_POST['naz'];
$has = $_POST['has'];

// odbieramy dane z formularza 
$imie = $_POST['imie']; 
$email = $_POST['meil']; 

//echo "The time is " . date("Y-m-d:h:i:s");

 
     


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gielda";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO `user`( `email`, `haslo`, `imie`, `nazwisko`) VALUES ('$email','$has','$imie','$naz')";
    // use exec() because no results are returned
    $conn->exec($sql);
   // echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;


?>