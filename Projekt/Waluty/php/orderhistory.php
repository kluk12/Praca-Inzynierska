<?php
$q =$_GET['q'];
//$q= "BTC-LTC";
$con = mysqli_connect('localhost','root','','gielda');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}
//echo $q;
mysqli_select_db($con,"gielda");
//if($q ==0){
//$sql="SELECT * FROM `orders_history`";
//} else {
   $sql="SELECT * FROM `orders_history` WHERE `market`='$q'";//`market`='BTC-LTC'
//}
$result = mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['data_otw'] . "</td>";
    echo "<td>" . $row['data_zam'] . "</td>";
    echo "<td>" . $row['typ'] . "</td>";
    echo "<td>" . $row['kurs_otw'] . "</td>";
    echo "<td>" . $row['jednostki'] . "</td>";
    echo "<td>" . $row['market'] . "</td>";
    echo "</tr>";
}

mysqli_close($con);