<?php
//$q = intval($_GET['q']);

$con = mysqli_connect('localhost','root','','gielda');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"gielda");
$sql="SELECT * FROM `account_balans`";
$result = mysqli_query($con,$sql);

$i=0;
while($row = mysqli_fetch_array($result)) {
// $w=$row['symbol'];
    echo "<tr>";
    echo "<td>" . $row['waluta'] . "</td>";
    echo "<td>" . $row['symbol'] . "</td>";
    echo "<td id=\"b" .$i. "\">" . $row['balans'] . "</td>";
    echo "<td>" . $row['block'] . "</td>";
    

    echo "</tr>";
    $i=$i+1;
}

mysqli_close($con);
?>
