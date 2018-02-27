
<?php
//$q = intval($_GET['q']);

$con = mysqli_connect('localhost','root','','gielda');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"gielda");
$sql="SELECT * FROM `account_balans`";
$result = mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['waluta'] . "</td>";
    echo "<td>" . $row['symbol'] . "</td>";
    echo "<td>" . $row['balans'] . "</td>";
    

    echo "</tr>";
}

mysqli_close($con);
?>