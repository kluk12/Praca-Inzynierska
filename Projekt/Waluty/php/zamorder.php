<?php
//$q = $_GET['id'];
//$q = $_POST['id'];

if (isset($_POST['id']))
    $q = $_POST['id'];

$con = mysqli_connect('localhost', 'root', '', 'gielda');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$datazam = date("Y-m-d:h:i:s");
$id_user = 1;
$btc;
$ltc;
$bltc;
$bxrp;
$beth;
$busdt;
$eth;
$xrp;
$bxrp;
$usdt;
mysqli_select_db($con, "gielda");
$sql = "  SELECT * FROM `open_orders`WHERE `id_oo`='$q'";



$result  = mysqli_query($con, $sql);
$sql21   = "  SELECT * FROM `account_balans`WHERE `id_user`='$id_user'";
$result2 = mysqli_query($con, $sql21);
while ($row = mysqli_fetch_array($result2)) {
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

while ($row = mysqli_fetch_array($result)) {
    $id_oo      = $row['id_oo'];
    $odata      = $row['data'];
    $otyp       = $row['typ'];
    $okurs      = $row['kurs'];
    $ojednostki = $row['jednostki'];
    $olimit     = $row['limit'];
    $omarket    = $row['market'];
    $id_user    = $row['id_user'];
    $total      = $row['total'];
    
    
    
    $mp = substr($omarket, 0, 3); //btc  ltc,eth 
    $mk = substr($omarket, 4, 7); //ltc ,eth usdt
    
      
    
    $sql2 = "INSERT INTO `orders_history`( `data_otw`, `data_zam`, `typ`, `kurs_otw`, `jednostki`, `id_User`, `market`,`limit`) VALUES ('$odata','$datazam','$otyp','$okurs','$ojednostki','$id_user','$omarket','$olimit')";
    
    if (mysqli_query($con, $sql2))
        $tt = 2;
    else
        $tt = 0;
    
    //balans
    $sql21 = "  SELECT * FROM `account_balans`WHERE `id_user`='$id_user'";
    if (mysqli_query($con, $sql21)) {
        $tt .= 1;
    } else
        $tt .= 0;
    if ($otyp == 0) {
        if ($omarket == 'BTC-LTC') {
            
            
            $s  = $btc;
            $bl = $total + $s;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bbtc;
            $b = $b - $total;
            if ($b < 0)
                $b *= (-1);
            $sql2 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mp'"; 
            if (mysqli_query($con, $sql2)) {
                $tt .= 3;
            } else
                $tt .= 0;
            $s  = $ltc;
            $bl = $s - $ojednostki;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bltc;
            $b = $b + $ojednostki;
            if ($b < 0)
                $b *= (-1);
            $sql3 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mk'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql3)) {
                $tt .= 3;
            } else
                $tt .= 0;
        }
        if ($omarket == 'BTC-ETH') {
            
            
            $s  = $btc;
            $bl = $total + $s;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bbtc;
            $b = $b - $total;
            if ($b < 0)
                $b *= (-1);
            $sql2 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mp'"; 
            if (mysqli_query($con, $sql2)) {
                $tt .= 3;
            } else
                $tt .= 0;
            $s  = $eth;
            $bl = $s - $ojednostki;
            if ($bl < 0)
                $bl *= (-1);
            $b = $beth;
            $b = $b + $ojednostki;
            if ($b < 0)
                $b *= (-1);
            $sql3 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mk'"; 
            if (mysqli_query($con, $sql3)) {
                $tt .= 3;
            } else
                $tt .= 0;
        }
        if ($omarket == 'BTC-XRP') {
            
            
            $s  = $btc;
            $bl = $total + $s;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bbtc;
            $b = $b - $total;
            if ($b < 0)
                $b *= (-1);
            $sql2 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mp'";
            if (mysqli_query($con, $sql2)) {
                $tt .= 3;
            } else
                $tt .= 0;
            $s  = $xrp;
            $bl = $s - $ojednostki;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bxrp;
            $b = $b + $ojednostki;
            if ($b < 0)
                $b *= (-1);
            $sql3 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mk'";
            if (mysqli_query($con, $sql3)) {
                $tt .= 3;
            } else
                $tt .= 0;
        }
        if ($omarket == 'BTC-USDT') { //na sell usdt
            
            
            $s  = $btc;
            $bl = $total + $s;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bbtc;
            $b = $b - $total;
            if ($b < 0)
                $b *= (-1);
            $sql2 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mp'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql2)) {
                $tt .= 3;
            } else
                $tt .= 0;
            $s  = $usdt;
            $bl = $s - $ojednostki;
            if ($bl < 0)
                $bl *= (-1);
            $b = $busdt;
            $b = $b + $ojednostki;
            if ($b < 0)
                $b *= (-1);
            $sql3 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mk'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql3)) {
                $tt .= 3;
            } else
                $tt .= 0;
        }
        if ($omarket == 'LTC-USDT') {
            
            
            $s  = $ltc;
            $bl = $total + $s;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bltc;
            $b = $b - $total;
            if ($b < 0)
                $b *= (-1);
            $sql2 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mp'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql2)) {
                $tt .= 3;
            } else
                $tt .= 0;
            $s  = $usdt;
            $bl = $s - $ojednostki;
            if ($bl < 0)
                $bl *= (-1);
            $b = $busdt;
            $b = $b + $ojednostki;
            if ($b < 0)
                $b *= (-1);
            $sql3 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mk'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql3)) {
                $tt .= 3;
            } else
                $tt .= 0;
        }
        if ($omarket == 'ETH-USDT') {
            
            
            $s  = $eth;
            $bl = $total + $s;
            if ($bl < 0)
                $bl *= (-1);
            $b = $beth;
            $b = $b - $total;
            if ($b < 0)
                $b *= (-1);
            $sql2 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mp'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql2)) {
                $tt .= 3;
            } else
                $tt .= 0;
            $s  = $usdt;
            $bl = $s - $ojednostki;
            if ($bl < 0)
                $bl *= (-1);
            $b = $busdt;
            $b = $b + $ojednostki;
            if ($b < 0)
                $b *= (-1);
            $sql3 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mk'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql3)) {
                $tt .= 3;
            } else
                $tt .= 0;
        }
        
    }
    if ($otyp == 1) {
        if ($omarket == 'BTC-LTC') {
            
            
            $s  = $ltc;
            $bl = $total + $s;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bltc;
            $b = $b - $total;
            if ($b < 0)
                $b *= (-1);
            $sql2 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mk'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql2)) {
                $tt .= 4;
            } else
                $tt .= 0;
            $s  = $btc;
            $bl = $s - $ojednostki;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bbtc;
            $b = $b + $ojednostki;
            if ($b < 0)
                $b *= (-1);
            $sql3 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mp'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql3)) {
                $tt .= 4;
            } else
                $tt .= 0;
        }
        if ($omarket == 'BTC-ETH') {
            
            
            $s  = $eth; //
            $bl = $total + $s;
            if ($bl < 0)
                $bl *= (-1);
            $b = $beth; //
            $b = $b - $total;
            if ($b < 0)
                $b *= (-1);
            $sql2 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mk'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql2)) {
                $tt .= 4;
            } else
                $tt .= 0;
            $s  = $btc; //
            $bl = $s - $ojednostki;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bbtc; //
            $b = $b + $ojednostki;
            if ($b < 0)
                $b *= (-1);
            $sql3 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mp'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql3)) {
                $tt .= 4;
            } else
                $tt .= 0;
        }
        if ($omarket == 'BTC-XRP') {
            
            
            $s  = $xrp; //$bxrp
            $bl = $total + $s;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bxrp; //
            $b = $b - $total;
            if ($b < 0)
                $b *= (-1);
            $sql2 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mk'";
            if (mysqli_query($con, $sql2)) {
                $tt .= 4;
            } else
                $tt .= 0;
            $s  = $btc; //
            $bl = $s - $ojednostki;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bbtc; //
            $b = $b + $ojednostki;
            if ($b < 0)
                $b *= (-1);
            $sql3 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mp'";
            if (mysqli_query($con, $sql3)) {
                $tt .= 4;
            } else
                $tt .= 0;
        }
        if ($omarket == 'BTC-USDT') {
            
            
            $s  = $usdt; //możliwa zamiena kolejności
            $bl = $total + $s;
            if ($bl < 0)
                $bl *= (-1);
            $b = $busdt; //
            $b = $b - $total;
            if ($b < 0)
                $b *= (-1);
            $sql2 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mk'";
            if (mysqli_query($con, $sql2)) {
                $tt .= 4;
            } else
                $tt .= 0;
            $s  = $btc; //
            $bl = $s - $ojednostki;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bbtc; //
            $b = $b + $ojednostki;
            if ($b < 0)
                $b *= (-1);
            $sql3 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mp'";
            if (mysqli_query($con, $sql3)) {
                $tt .= 4;
            } else
                $tt .= 0;
        }
        if ($omarket == 'LTC-USDT') {
            
            
            $s  = $usdt;
            $bl = $total + $s;
            if ($bl < 0)
                $bl *= (-1);
            $b = $busdt;
            $b = $b - $total;
            if ($b < 0)
                $b *= (-1);
            $sql2 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mk'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql2)) {
                $tt .= 4;
            } else
                $tt .= 0;
            $s  = $ltc;
            $bl = $s - $ojednostki;
            if ($bl < 0)
                $bl *= (-1);
            $b = $bltc;
            $b = $b + $ojednostki;
            if ($b < 0)
                $b *= (-1);
            $sql3 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mp'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql3)) {
                $tt .= 4;
            } else
                $tt .= 0;
        }
        if ($omarket == 'ETH-USDT') {
            
            
            $s  = $usdt;
            $bl = $total + $s;
            if ($bl < 0)
                $bl *= (-1);
            $b = $busdt;
            $b = $b - $total;
            if ($b < 0)
                $b *= (-1);
            $sql2 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mk'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql2)) {
                $tt .= 4;
            } else
                $tt .= 0;
            $s  = $eth;
            $bl = $s - $ojednostki;
            if ($bl < 0)
                $bl *= (-1);
            $b = $beth;
            $b = $b + $ojednostki;
            if ($b < 0)
                $b *= (-1);
            $sql3 = "UPDATE `account_balans` SET`balans`='$bl',`block`='$b' WHERE `symbol`='$mp'"; //jesze 1 zapytanie na btc
            if (mysqli_query($con, $sql3)) {
                $tt .= 4;
            } else
                $tt .= 0;
        }
        
    }
    
    
    
    
    
    $sql4 = "DELETE FROM `open_orders` WHERE `id_oo`=' $id_oo'"; 
    if (mysqli_query($con, $sql4)) {
        $tt .= 6;
    } else
        $tt .= 0;
    
    echo $tt, "  " . $id_oo . "  ", $odata . "  ", $otyp . "  ", $okurs . "  ", $ojednostki . "  ", $total . "  ", $omarket . "  ", $id_user . "  ", $datazam . "  ", $btc . "  ", $ltc . "    ", $usdt;
    
    
}

//echo $q;
mysqli_close($con);
?>
