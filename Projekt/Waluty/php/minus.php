<?php  

$log = $_POST['log'];
//if(isset($_GET['ha']))
$has = $_POST['has'];


     
$con = mysqli_connect('localhost','root','','gielda');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}
$id_user=1;
mysqli_select_db($con,"gielda");
$sql= "SELECT * FROM `account_balans`WHERE `id_user`='$id_user'";
$result = mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {

     $id_ab     = $row['id_ab'];
    $waluta    = $row['waluta'];
    $symbol    = $row['symbol'];
    $balans    = $row['balans'];
    $block     = $row['block'];
    $id_userab = $row['id_user'];
    if ($symbol == "BTC") {
        $btc  = $balans;
        $bbtc = $block;
    }
    if ($symbol == "LTC") {
        $ltc  = $balans;
        $bltc = $block;
    }
    if ($symbol == "ETH") {
        $eth  = $balans;
        $beth = $block;
    }
    if ($symbol == "USDT") {
        $usdt  = $balans;
        $busdt = $block;
    }
    if ($symbol == "XRP") {
        $xrp  = $balans;
        $bxrp = $block;
    }
}
}

mysqli_close($con);
?>