




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


function depozit(war) {
    if (war == "") {

        return;
    }
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("depozit").innerHTML = this.responseText;
        }
    }
    xmlhttp.open("GET", "php/p_depoz.php", true);
    xmlhttp.send();
}
depozit();

function balans(war) {
    if (war == "") {

        return;
    }
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("balans").innerHTML = this.responseText;
        }
    }
    xmlhttp.open("GET", "php/saldo.php", true);
    xmlhttp.send();
}
balans();

function openorder(war) {
    if (war == "") {

        return;
    }
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("openorder").innerHTML = this.responseText;
        }
    }
    xmlhttp.open("GET", "php/openorder.php", true);
    xmlhttp.send();
}
openorder();

function openorderspr() {

    var url = 'php/openordersspr.php';
    //var id, data, typ, kurs, jednostki, limit, market;


    $.ajax({
        url: url,
        dataType: 'json',
        type: 'GET',

        success: function (aa) {
            dbs = aa;

            //  console.log(aa);
            //aa=JSON.parse(aa);
            
          console.log(dbs);
        //  console.log(dbs[2]);
        //  console.log(dbs[5]);
         //   //return dbs;



        }
    });
}
//openorderspr();


function historyorder(war) {
    if (war == "") {

        return;
    }
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("historyorder").innerHTML = this.responseText;
        }
    }
    xmlhttp.open("GET", "php/orderhistory.php?q=" + war, true); //.php?q=" + war http://localhost:82/Projekt/Waluty/php/orderhistory.php
    xmlhttp.send();
}
historyorder("BTC-LTC");


//synchronizacja
function ajax_zor() {
    var url = 'php/zamorder.php'; //http://localhost:82/Projekt/Waluty/php/buy.php
    var have = $('#have').val();
    var cena = $('#cena').val();
    var total = $('#total').val();
    var market = "BTC_LTC";
    var typ = 1;



    $.ajax({
        url: url,
        dataType: 'json',
        type: 'POST',
        data: {
           
            id: 1
        },
        success: function (response) {
            console.log(response);
            // if (response.status == 'ok')
            //  $('#posiadasz').val(total);
            //$('#info').html('Zlecenie powiodło się ');

        }
    })
           }
//xmr,btc-usd,usd-bcc,usd-ltc,usd-eth,95 btc-ltc,btc-omg,btc-xmr,btc-eth
var nr = [253, 257, 256, 261, 259, 95, 117, 188, 61];
var spr = [],
    dbs, a;
d();
function d() {
    ajaxGet('https://bittrex.com/api/v1.1/public/getmarketsummaries',
        function (response) {
            response = JSON.parse(response);
            if (!response)
                return;
            // var a,i; 
            bittrex = response;
            openorderspr();

            $(document).ready(function () {

            });
            //console.log(dbs[0].typ);
            //  for (var i = 0; i <= (nr.length) - 1; i++) {// spr[i] = bittrex.result[nr[i]];     }
         
      //  for(var i=0;i<=dbs.length;i++){
        //buy

           if (dbs[i].typ == 1) {
              
            
                if (bittrex.result[95].Last <= dbs[i].kurs){
                   
                    
                    
                       console.log("bay");
                } 
                 
                else
                    console.log("czekamy");


            }
        //sell
            if (dbs[i].typ == 0 ) {
                console.log("tys");
                // normal dbs[0].limit==0 spolos dbs[0].limit!=0
                if (bittrex.result[95].Last >= dbs[0].kurs)
                    console.log("sell");
                else
                    console.log("czekamy");


            }
        
        }
              
    
    

    )}
   /*//stoploss
            if (dbs[0].typ == 1 && dbs[0].limit != 0) {
                console.log("tyss");
                // normal dbs[0].limit==0 spolos dbs[0].limit!=0
                if (dbs[0].kurs <= dbs[0].limit) {
                    console.log("tysss"); //bay do spradzenia
                    if (bittrex.result[95].Last <= dbs[0].kurs)
                        console.log("bay");
                    else
                        console.log("czekamyb");
                } else if (dbs[0].typ == 0 && dbs[0].limit != 0) { //sell
                    if (bittrex.result[95].Last >= dbs[0].kurs)
                        console.log("sell");
                    else
                        console.log("czekamys");
                }

            } else console.log("niewum");

   //buy
        if (dbs[0].typ == 1 && dbs[0].limit == 0) {
              
                // normal dbs[0].limit==0 spolos dbs[0].limit!=0
                if (bittrex.result[95].Last <= dbs[0].kurs) // < bay > sell
                    console.log("bay");
                else
                    console.log("czekamy");


            } //sell
            if (dbs[0].typ == 0 && dbs[0].limit == 0) {
                console.log("tys");
                // normal dbs[0].limit==0 spolos dbs[0].limit!=0
                if (bittrex.result[95].Last >= dbs[0].kurs)
                    console.log("sell");
                else
                    console.log("czekamy");


            } //stoploss
            if (dbs[0].typ == 1 && dbs[0].limit != 0) {
                console.log("tyss");
                // normal dbs[0].limit==0 spolos dbs[0].limit!=0
                if (dbs[0].kurs <= dbs[0].limit) {
                    console.log("tysss"); //bay do spradzenia
                    if (bittrex.result[95].Last <= dbs[0].kurs)
                        console.log("bay");
                    else
                        console.log("czekamyb");
                } else if (dbs[0].typ == 0 && dbs[0].limit != 0) { //sell
                    if (bittrex.result[95].Last >= dbs[0].kurs)
                        console.log("sell");
                    else
                        console.log("czekamys");
                }

            } else console.log("niewum");
*/

            //dane z giełdy 
            //z bazy 
    