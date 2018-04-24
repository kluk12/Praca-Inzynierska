

<?php


$con = mysqli_connect('localhost','root','','gielda');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"gielda");
$sql="SELECT * FROM `deposit_history`";
mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['data'] . "</td>";
    echo "<td>" . $row['ile'] . "</td>";
    echo "<td>" . $row['waluta'] . "</td>";

    echo "</tr>";
}

mysqli_close($con);
?>