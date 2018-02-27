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
var ob = null;
var pb,ps;

function orderbook() {
    ajaxGet('https://bittrex.com/api/v1.1/public/getorderbook?market=BTC-LTC&type=both',
        function (response) {
            response = JSON.parse(response);
            if (!response)
                return;

            ob = response;


            //   for (i in ob) {
            //      console.log(ob);
            // document.getElementById("zz").innerHTML = ;// outputs an id
            //   }
            $(document).ready(function () {

                //  for (i in ob) {
                // console.log(ob.result.buy[2]);
                // for (var i = 0; i <= 6; i++) {
                $('#1').html(((ob.result.buy[0].Rate) * (ob.result.buy[0].Quantity)).toFixed(4));
                $('#2').html(ob.result.buy[0].Quantity.toFixed(8));
                $('#3').html(ob.result.buy[0].Rate.toFixed(8));
                $('#4').html(((ob.result.buy[1].Rate) * (ob.result.buy[1].Quantity)).toFixed(4));
                $('#5').html(ob.result.buy[1].Quantity.toFixed(8));
                $('#6').html(ob.result.buy[1].Rate.toFixed(8));
                $('#7').html(((ob.result.buy[2].Rate) * (ob.result.buy[2].Quantity)).toFixed(4));
                $('#8').html(ob.result.buy[2].Quantity.toFixed(8));
                $('#9').html(ob.result.buy[2].Rate.toFixed(8));
                $('#10').html(((ob.result.buy[3].Rate) * (ob.result.buy[3].Quantity)).toFixed(4));
                $('#11').html(ob.result.buy[3].Quantity.toFixed(8));
                $('#12').html(ob.result.buy[3].Rate.toFixed(8));
                $('#13').html(((ob.result.buy[4].Rate) * (ob.result.buy[4].Quantity)).toFixed(4));
                $('#14').html(ob.result.buy[4].Quantity.toFixed(8));
                $('#15').html(ob.result.buy[4].Rate.toFixed(8));
                $('#16').html(((ob.result.buy[5].Rate) * (ob.result.buy[5].Quantity)).toFixed(4));
                $('#17').html(ob.result.buy[5].Quantity);
                $('#18').html(ob.result.buy[5].Rate);

                $('#s1').html(((ob.result.sell[0].Rate) * (ob.result.sell[0].Quantity)).toFixed(4));
                $('#s2').html(ob.result.sell[0].Quantity.toFixed(8));
                $('#s3').html(ob.result.sell[0].Rate.toFixed(8));
                $('#s4').html(((ob.result.sell[1].Rate) * (ob.result.sell[1].Quantity)).toFixed(4));
                $('#s5').html(ob.result.sell[1].Quantity.toFixed(8));
                $('#s6').html(ob.result.sell[1].Rate.toFixed(8));
                $('#s7').html(((ob.result.sell[2].Rate) * (ob.result.sell[2].Quantity)).toFixed(4));
                $('#s8').html(ob.result.sell[2].Quantity.toFixed(8));
                $('#s9').html(ob.result.sell[2].Rate.toFixed(8));
                $('#s10').html(((ob.result.sell[3].Rate) * (ob.result.sell[3].Quantity)).toFixed(4));
                $('#s11').html(ob.result.sell[3].Quantity.toFixed(8));
                $('#s12').html(ob.result.sell[3].Rate.toFixed(8));
                $('#s13').html(((ob.result.sell[4].Rate) * (ob.result.sell[4].Quantity)).toFixed(4));
                $('#s14').html(ob.result.sell[4].Quantity.toFixed(8));
                $('#s15').html(ob.result.sell[4].Rate.toFixed(8));
                $('#s16').html(((ob.result.sell[5].Rate) * (ob.result.sell[5].Quantity)).toFixed(4));
                $('#s17').html(ob.result.sell[5].Quantity.toFixed(8));
                $('#s18').html(ob.result.sell[5].Rate.toFixed(8));
                $('#BID').html(ob.result.buy[0].Rate.toFixed(8));
                $('#ASK').html(ob.result.sell[0].Rate.toFixed(8));
                //  }
                //  }

            });
        });

}
orderbook();
//setInterval(orderbook,5000);

var bittrex = null,
    gh = null;

function d() {
    ajaxGet('https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-ltc',
        function (response) {
            response = JSON.parse(response);
            if (!response)
                return;
            // var a,i; 
            bittrex = response;


            $(document).ready(function () {

                // var text =replace(().toString, ".")
                $('#LAST').html(bittrex.result[0].Last);
                $('#cena').val(bittrex.result[0].Last);
                $('#lcena').val(bittrex.result[0].Last);
                $('#scena').val(bittrex.result[0].Last);
                $('#VOL').html((bittrex.result[0].Volume).toFixed(4));

                $('#HIGH').html(bittrex.result[0].High);
                $('#LOW').html(bittrex.result[0].Low);




            });

            /*  for (i in bittrex) {
                var a= this.bittrex.result[i];
                console.log(a);
                
            }
*/

        });

}
d();


function aktualizacja() {
    ajaxGet('https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-ltc',
        function (response) {
            response = JSON.parse(response);
            if (!response)
                return;
            // var a,i; 
            bittrex = response;
            $(document).ready(function () {

                // var text =replace(().toString, ".")
                $('#LAST').html(bittrex.result[0].Last);
                $('#cena').val(bittrex.result[0].Last);
                $('#lcena').val(bittrex.result[0].Last);
                $('#scena').val(bittrex.result[0].Last);
                $('#VOL').html((bittrex.result[0].Volume).toFixed(4));

                $('#HIGH').html(bittrex.result[0].High);
                $('#LOW').html(bittrex.result[0].Low);
            });

            /*  for (i in bittrex) {
                var a= this.bittrex.result[i];
                console.log(a);
                
            }
*/

        });
}


function inteval() {
    d();
    orderbook();aktualizacja();ha();
   /* if (bittrex == null & ob == null)
        t = setTimeout(inteval, 500);
    else clearTimeout(t);
    setTimeout(function () {
        if (ob == null)
            for (i in bittrex) {
                if (ob.result[i].MarketName == "BTC-ARK")
                    var a = ob.result[i].Last;
                console.log(a);
            }
    }, 50000)*/
}
//inteval();
//setInterval(inteval, 5000);



function ha() {
    ajaxGet('https://bittrex.com/api/v1.1/public/getmarkethistory?market=btc-ltc',
        function (response) {
            response = JSON.parse(response);
            if (!response)
                return;
            // var a,i; 
            gh = response;

          //  for (i in gh) {   console.log(gh);           }

            $(document).ready(function () {
$("#hs").empty();
                // var text =replace(().toString, ".")
                for (var i = 0; i <= 10; i++) {
                    var dat = gh.result[i].TimeStamp;
                    var d = dat.replace("T", " ").slice(0, 19);
                    $('#hs').append('<tr> <td id="time"><a href="">' + d + '</a></td><td id="typ">' + gh.result[i].OrderType + '</td><td id="LAST">' + gh.result[i].Price.toFixed(8) + '</td><td id="ZMIANA">' + gh.result[i].Quantity.toFixed(8) + '</td>  <td id="BID">' + gh.result[i].Total.toFixed(8) + '</td>  </tr>  ');
                }



            });



        });
}
ha();



var data = new Date();

function Zero(i) {
    return (i < 10) ? '0' + i : i;
}

function TextTime() {
    var Date = Zero(data.getDate()) + "." + Zero((data.getMonth() + 1)) + "." + data.getFullYear();
    var Time = Zero(data.getHours()) + ":" + Zero(data.getMinutes()) + ":" + Zero(data.getSeconds());
    // console.log(Date,Time);
    return Date + " " + Time;
}

function texttype(typ) {
    if (typ == 0) {
        return "SELL"
    }
    if (typ == 1) {
        return "BUY"
    }
}

function ajax_bay() {
    var url = 'php/buy.php'; //http://localhost:82/Projekt/Waluty/php/buy.php
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
            total: total,
            have: have,
            cena: cena,
            market: market,
            typ: typ
        },
        success: function (response) {
            console.log(response);
            // if (response.status == 'ok')
            //  $('#posiadasz').val(total);
            //$('#info').html('Zlecenie powiodło się ');

        }
    });
    $('#OR').append('<tr> <td id="CZAS">' + TextTime() + '</a></td><td id="typ">' + texttype(typ) + '</td><td id="BID/ASK">' + cena + '</td><td id="ILOŚĆ">' + have + '</td><td id="TOTAL">' + total + '</td><td id="MARKET">' + market + '</td>  </tr>  ');
    $('#posiadasz').val(total);
}

function ajax_sell() {
    var url = 'php/sell.php'; //http://localhost:82/Projekt/Waluty/php/buy.php
    var have = $('#shave').val();
    var cena = $('#scena').val();
    var total = $('#stotal').val();
    var typ = 0;
    var market = "BTC_LTC";

    // $('#posiadasz4,#posiadasz2').val(total);
    $.ajax({
        url: url,
        dataType: 'json',
        type: 'POST',
        data: {
            total: total,
            have: have,
            cena: cena,
            market: market,
            typ: typ
        },
        success: function (response) {
            console.log(response);
            // $('#info').html('');

            if (response.status == 'ok')
                console.log("ok");
            //  $('#posiadasz4').val(total);
            //$('#info').css('color', 'green');



        }
    });
    $('#posiadasz4,#posiadasz2').val(total);
    $('#OR').append('<tr> <td id="CZAS">' + TextTime() + '</a></td><td id="typ">' + texttype(typ) + '</td><td id="BID/ASK">' + cena + '</td><td id="ILOŚĆ">' + have + '</td><td id="TOTAL">' + total + '</td><td id="MARKET">' + market + '</td>  </tr>  ');
}

function ajax_stoploss(typ) {
    var url = 'php/stoploss.php'; //http://localhost:82/Projekt/Waluty/php/buy.php
    var have = $('#lhave').val();
    var cena = $('#lcena').val();
    var total = $('#ltotal').val();
    var limit = $('#limit').val();
    var market = "BTC_LTC";
    $('#OR').append('<tr> <td id="CZAS">' + TextTime() + '</a></td><td id="typ">' + texttype(typ) + '</td><td id="BID/ASK">' + cena + '</td><td id="ILOŚĆ">' + have + '</td>  <td id="LIMIT">' + limit + '</td><td id="TOTAL">' + total + '</td><td id="MARKET">' + market + '</td>  </tr>  ');
    // console.log(have,cena,total,typ,market,limit, $('#lhave').val(), $('lcena').val(),$('ltotal').val() , $('limit').val() );
    $.ajax({
        url: url,
        dataType: 'json',
        type: 'POST',
        data: {
            total: total,
            have: have,
            cena: cena,
            market: market,
            typ: typ,
            limit: limit
        },
        success: function (response) {
            console.log(response);
            $('#info').html('OK');

            if (response.status == 'ok')
                console.log("ok");
            



        }
    });
}




function posiadasz(war) {
    if (war == "") {

        return;
    }
    if (window.XMLHttpRequest) {

        xmlhttp = new XMLHttpRequest();
    } else {

        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
ps= this.responseText;
             var i = $('#posiadasz').val(ps);
          //  document.getElementById("posiadasz").innerHTML= ps= this.responseText;
         //   document.getElementById("posiadasz2").innerHTML = this.responseText;
        }
    }
    xmlhttp.open("GET", "php/posiadasz.php?q=" + war, true);
    xmlhttp.send();
}

function posiadasz2(war) {
    if (war == "") {

        return;
    }
    if (window.XMLHttpRequest) {

        xmlhttp = new XMLHttpRequest();
    } else {

        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("posiadasz4").innerHTML=pb = this.responseText;
          //  document.getElementById("posiadasz3").innerHTML = this.responseText;
        }
    }
    xmlhttp.open("GET", "php/posiadasz.php?q=" + war, true);
    xmlhttp.send();
}
posiadasz("LTC");
posiadasz2("BTC");


$(document).ready(function () {
  
   
    //buy
    $("#bmax").click(function () {
        var h = $('#posiadasz4').text();
        // console.log(h);
        $('#have').val(h);
        var i = $('#have').val();
        var c = $("#cena").val();
        var ca = $("#total").val();
        //   console.log(i,c,ca);        
        ca = c * i;
        $("#total").val(ca.toFixed(8));
    }); 
    
    //all
    $("#all").click(function () {
     
      var ab=  $("#posiadasz4").val();
        $("#total").val(ab);
        
    });
    $("#btntotal").click(function () {
     
      var ab=  $("#posiadasz").val();
        $("#stotal").val(ab);
        
    });
    
    //akualizacja ceny
    $("#aktcena").click(function () {
        aktualizacja();
    });
    //stoploss
    $("#lmax").click(function () {
        var h = $('#posiadasz2').text();
        // console.log(h);
        $('#lhave').val(h);
        var i = $('#lhave').val();
        var c = $("#lcena").val();
        var ca = $("#ltotal").val();
        //   console.log(i,c,ca);        
        ca = c * i;
        $("#ltotal").val(ca.toFixed(8));
    });
    //sell
    $("#smax").click(function () {
        var h = $('#posiadasz').text();
        // console.log(h);
        $('#shave').val(h);
        var i = $('#shave').val();
        var c = $("#scena").val();
        var ca = $("#stotal").val();
        //   console.log(i,c,ca);        
        ca = c * i;
        $("#stotal").val(ca.toFixed(8));
    });
    //limit
    $("#btnlimit").click(function () {
        var h = $('#lcena').val();
        //console.log(h);
        $('#limit').val(h); 
    });

});

$(document).ready(function () {
    //przelicznik buy
    $("#have").change(function () {
        var i = $('#have').val();
        var c = $("#cena").val();
        var ca = $("#total").val();
        // console.log(i,c,ca);        
        ca = c * i;
        $("#total").val(ca.toFixed(8));
    });
    $("#cena").change(function () {
        var i = $('#have').val();
        var c = $("#cena").val();
        var ca = $("#total").val();
        //   console.log(i,c,ca);        
        ca = c * i;
        $("#total").val(ca.toFixed(8));
    });
    $("#total").change(function () {
        var i = $('#have').val();
        var c = $("#cena").val();
        var ca = $("#total").val();
        //   console.log(i,c,ca);        
        i = ca / c;
        $("#have").val(i.toFixed(8));
    });
    //stoploss
    $("#lhave").change(function () {
        var i = $('#lhave').val();
        var c = $("#lcena").val();
        var ca = $("#ltotal").val();
        // console.log(i,c,ca);        
        ca = c * i;
        $("#ltotal").val(ca.toFixed(8));
    });
    $("#lcena").change(function () {
        var i = $('#lhave').val();
        var c = $("#lcena").val();
        var ca = $("#ltotal").val();
        //   console.log(i,c,ca);        
        ca = c * i;
        $("#ltotal").val(ca.toFixed(8));
    });
    $("#ltotal").change(function () {
        var i = $('#lhave').val();
        var c = $("#lcena").val();
        var ca = $("#ltotal").val();
        //   console.log(i,c,ca);        
        i = ca / c;
        $("#lhave").val(i.toFixed(8));
    });
    //sell
    $("#shave").change(function () {
        var i = $('#shave').val();
        var c = $("#scena").val();
        var ca = $("#stotal").val();
        // console.log(i,c,ca);        
        ca = c * i;
        $("#stotal").val(ca.toFixed(8));
    });
    $("#scena").change(function () {
        var i = $('#shave').val();
        var c = $("#scena").val();
        var ca = $("#stotal").val();
        //   console.log(i,c,ca);        
        ca = c * i;
        $("#stotal").val(ca.toFixed(8));
    });
    $("#stotal").change(function () {
        var i = $('#shave').val();
        var c = $("#scena").val();
        var ca = $("#stotal").val();
        //   console.log(i,c,ca);        
        i = ca / c;
        $("#shave").val(i.toFixed(8));
    });
});


function historyorder(war) {
    if (war == "" || war == "0") {

        return;
    }
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
         //   document.getElementById("hist").innerHTML = this.responseText;
            
            $('#hist').append(this.responseText);
            
        }
    }
    xmlhttp.open("GET", "php/orderhistory.php?q=" + war, true);
    xmlhttp.send();
}
historyorder("BTC-LTC");


$(function () {
    $('#keywords').tablesorter();
});








