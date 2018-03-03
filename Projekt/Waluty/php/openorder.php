

<?php
//$q = intval($_GET['q']);

$con = mysqli_connect('localhost','root','','gielda');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"gielda");
$sql="SELECT * FROM `open_orders`";
$result = mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['data'] . "</td>";
    echo "<td>" . $row['typ'] . "</td>";
    echo "<td>" . $row['kurs'] . "</td>";
    echo "<td>" . $row['jednostki'] . "</td>";
   // echo "<td>" . $row['limit'] . "</td>";    
    echo "<td>" . $row['market'] . "</td>";
    echo "</tr>";
}

mysqli_close($con);
?>