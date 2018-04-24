var ajaxGet = function (url, callback) {
    var callback = (typeof callback == 'function' ? callback : false),
        xhr = null;
    try {
        xhr = new XMLHttpRequest();
    } catch (e) {
        try {
            ajxhrax = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    if (!xhr)
        return null;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && callback) {
            callback(xhr.responseText)
        }
    }
    xhr.send(null);
}

var bittrex = null;
//var nr = [94, 60, 193, 257, 262,265];
//      ltc eth  xrp  b-ust omg  ltc
var nr = [89, 57, 181, 257, 261, 262];
var link = ["Waluty/BTC_LTC.html", "Waluty/BTC-ETH.html", "Waluty/BTC-XRP.html", "Waluty/USDT-BTC.html", "Waluty/USDT-ETH.html", "Waluty/USDT-LTC.html"];
//spr

function d() {
    ajaxGet('https://bittrex.com/api/v1.1/public/getmarketsummaries',
        function (response) {
            response = JSON.parse(response);
            if (!response)
                return;
            // var a,i; 
            bittrex = response;

            for (i in bittrex) {
                console.log(bittrex);
            }
            $(document).ready(function () {


                function procent(m, w) {
                    var p = (w - m) / m * 100;
                    // console.log(p);
                    return p.toFixed(2) + " %";
                }

                for (var i = 0; i <= (nr.length / 2) - 1; i++) {

                    $('#btc').append('<tr> <td id="MARKET"><a href="' + link[i] + '">' + bittrex.result[nr[i]].MarketName + '</a></td><td id="VOL">' + bittrex.result[nr[i]].Volume.toFixed(4) + '</td><td id="LAST">' + bittrex.result[nr[i]].Last + '</td><td id="ZMIANA">' + procent(bittrex.result[nr[i]].PrevDay, bittrex.result[nr[i]].Last) + '</td>  <td id="BID">' + bittrex.result[nr[i]].Bid + '</td><td id="ASK">' + bittrex.result[nr[i]].Ask + '</td><td id="HIGH">' + bittrex.result[nr[i]].High + '</td><td id="LOW">' + bittrex.result[nr[i]].Low + '</td>  </tr>  ');
                }
                for (var i = (nr.length / 2); i <= (nr.length); i++) {

                    $('#usdt').append('<tr> <td id="MARKET"><a href="' + link[i] + '">' + bittrex.result[nr[i]].MarketName + '</a></td><td id="VOL">' + bittrex.result[nr[i]].Volume.toFixed(4) + '</td><td id="LAST">' + bittrex.result[nr[i]].Last + '</td><td id="ZMIANA">' + procent(bittrex.result[nr[i]].PrevDay, bittrex.result[nr[i]].Last) + '</td>  <td id="BID">' + bittrex.result[nr[i]].Bid + '</td><td id="ASK">' + bittrex.result[nr[i]].Ask + '</td><td id="HIGH">' + bittrex.result[nr[i]].High + '</td><td id="LOW">' + bittrex.result[nr[i]].Low + '</td>  </tr>  ');
                }
            });

        });



}

d();


function wyloguj() {
    //  localStorage.setItem('user', 0);
    // document.getElementById(".wyl").innerHTML = '<a href='index.html' ><span>Wyloguj</span></a>' ;

}
