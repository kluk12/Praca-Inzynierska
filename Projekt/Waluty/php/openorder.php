<?php
//$q = intval($_GET['q']);

$con = mysqli_connect('localhost','root','','gielda');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"gielda");
$sql="SELECT * FROM `open_orders`";
$result = mysqli_query($con,$sql);
function procent($m, $w) {
                    $p = ($w - $m) / $m * 100;
                   
                    return number_format(p,2,",","."); + " %";
                }
$i=0;
while($row = mysqli_fetch_array($result)) {
    
       if( $row['typ']==1) {$typ ="BUY";} else {$typ ="SELL" ;}
    echo "<tr id=\"zz\">";
    echo "<td>" . $row['data'] . "</td>";
    echo "<td>" . $typ . "</td>";
    echo "<td id=\"kurs" .$i. "\">" . $row['kurs'] . "</td>";
    echo "<td id=\"jed" .$i. "\">" . $row['jednostki'] . "</td>";
   // echo "<td>" . $row['limit'] . "</td>";    
    echo "<td id=\"marked" .$i. "\">" . $row['market'] . "</td>";
    echo "<td id=\"zysk".$i."\"></td>";
    echo "</tr>";
    $i += 1;
    
}

mysqli_close($con);
?>
