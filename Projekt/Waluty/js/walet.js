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
//d();


openorderspr();

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

        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("balans").innerHTML = this.responseText;

        }
        xmlhttp.open("GET", "php/saldo.php", true);
        xmlhttp.send();

    }
}

function nap() {
    for (var i = 0; i <= 4; i++) {
        var q = $('#b' + i).html();
        q = parseFloat(q);
        if (q < 0) {
            q = q * (-1);
            $('#b' + i).html(q);
            console.log("zamiana");
        }
    }
}
let promise = new Promise(resolve => {
    let value = 'success';
    resolve(value);
});

balans.then(response => {
    console.log(response); // success
    return 'another success';
}).then(response => {
    console.log(response); // another success 
});

function procent(m, w) {
    var p = (w - m) / m * 100;
    // console.log(p);
    return p.toFixed(2) + " %";
}

function procent2(m, w) {
    var p = (w - m) / m * 100;
    // console.log(p);
    return p.toFixed(1);
}


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
            //    console.log(dbs);

            //d();

        }
    });
    return dbs;
}


//spr
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

historyorder("BTC-ETH");




function ajax_zor(myId) {

    $.ajax({
        url: 'php/zamorder.php',
        dataType: 'text',
        type: 'POST',
        data: {
            id: myId
        },
        success: function (response) {
            console.log(response);
        }
    });
}





//ltc eth xrp // btc eht ltc
var nr = [89, 57, 181, 257, 261, 262];
var spr = []; //,   dbs;
var a, bittrex, dbs;




function sprdane(dbs) {

    for (i in nr) {
        spr[i] = bittrex.result[nr[i]].Last;
    }
    //buy
    for (i in dbs) {
        //  console.log("fot" + i);
        if (dbs[i].typ == 1) {
            if (dbs[i].market == "BTC-LTC") {
                if (spr[0] <= dbs[i].kurs) {
                    console.log(dbs[i]);
                    ajax_zor(dbs[i].id_oo);
                    $('#zysk' + i).parent().css('color', 'green');
                }
            }
            if (dbs[i].market == "BTC-ETH") {
                //0 dla btc ltc
                if (spr[1] <= dbs[i].kurs) {

                    console.log(dbs[i]);
                    ajax_zor(dbs[i].id_oo);
                    $('#zysk' + i).parent().css('color', 'green');
                    //   console.log("bay");
                } else {}
                //   console.log("czekamybay" + i);
            }
            if (dbs[i].market == "BTC-XRP") {

                if (spr[2] <= dbs[i].kurs) {

                    console.log(dbs[i]);
                    ajax_zor(dbs[i].id_oo);
                    $('#zysk' + i).parent().css('color', 'green');
                }

            }
            if (dbs[i].market == "BTC-USDT") {

                if (spr[3] <= dbs[i].kurs) {

                    console.log(dbs[i]);
                    ajax_zor(dbs[i].id_oo);
                    $('#zysk' + i).parent().css('color', 'green');
                }

            }
            if (dbs[i].market == "ETH-USDT") {

                if (spr[4] <= dbs[i].kurs) {

                    console.log(dbs[i]);
                    ajax_zor(dbs[i].id_oo);
                    $('#zysk' + i).parent().css('color', 'green');
                }

            }
            if (dbs[i].market == "LTC-USDT") {

                if (spr[5] <= dbs[i].kurs) {

                    console.log(dbs[i]);
                    ajax_zor(dbs[i].id_oo);
                    $('#zysk' + i).parent().css('color', 'green');
                }
            }
        }
        //sell
        if (dbs[i].typ == 0) {
            if (dbs[i].market == "BTC-LTC") {

                if (spr[0] >= dbs[i].kurs) {
                    console.log(dbs[i]);
                    ajax_zor(dbs[i].id_oo);
                    $('#zysk' + i).parent().css('color', 'green');
                }
            }
            if (dbs[i].market == "BTC-ETH") {

                if (spr[1] >= dbs[i].kurs) {
                    //  console.log("sell");
                    console.log(dbs[i]);
                    ajax_zor(dbs[i].id_oo);
                    $('#zysk' + i).parent().css('color', 'green');
                } else {
                    //     console.log("czekamy sell" + i);
                }

            }
            if (dbs[i].market == "BTC-XRP") {

                if (spr[2] >= dbs[i].kurs) {

                    console.log(dbs[i]);
                    ajax_zor(dbs[i].id_oo);
                    $('#zysk' + i).parent().css('color', 'green');
                } else {

                }

            }
            if (dbs[i].market == "BTC-USDT") {

                if (spr[3] >= dbs[i].kurs) {

                    console.log(dbs[i]);
                    ajax_zor(dbs[i].id_oo);
                    $('#zysk' + i).parent().css('color', 'green');
                }

            }
            if (dbs[i].market == "ETH-USDT") {

                if (spr[4] >= dbs[i].kurs) {
                    //  console.log("sell");
                    console.log(dbs[i]);
                    ajax_zor(dbs[i].id_oo);
                    $('#zysk' + i).parent().css('color', 'green');
                } else {
                    //     console.log("czekamy sell" + i);
                }

            }
            if (dbs[i].market == "LTC-USDT") {

                if (spr[5] >= dbs[i].kurs) {
                    //  console.log("sell");
                    console.log(dbs[i]);
                    ajax_zor(dbs[i].id_oo);
                    $('#zysk' + i).parent().css('color', 'green');
                } else {
                    //     console.log("czekamy sell" + i);
                }

            }
        }
    }
}



//let promise = new Promise(resolve => {
//  let value = 'success';
//  resolve(value);
//});
//
//promise.then(response => {
//  console.log(response); // success
//  return 'another success';
//}).then(response => {
//  console.log(response); // another success 
//});






let promise = new Promise((resolve, reject) => {
    let value = $.getJSON('https://bittrex.com/api/v1.1/public/getmarketsummaries',
        function (jd) {
            console.log(jd);

        });
    resolve(value);
    reject(new Error('Coś poszło nie tak!'));
});

promise.then(response => {
    console.log(response);
    bittrex = response;
    zysk(response);
    balans();

    var a = openorderspr();
    return a;
}).then(response => {
    sprdane(response);
    console.log(response);
    // zysk(response);
    return console.log("success ");
}).catch(error => {
    console.log(error.message);
});

function zysk(bittrex) { // można dodać waluty
    var ltc = bittrex.result[nr[0]].Last;
    var eth = bittrex.result[nr[1]].Last;
    var xrp = bittrex.result[nr[2]].Last;
    var btcu = bittrex.result[nr[3]].Last;
    var ethu = bittrex.result[nr[4]].Last;
    var ltcu = bittrex.result[nr[5]].Last;

    console.log(ltc, eth, xrp, btcu, ethu, ltcu);

    var ile = $('tbody#openorder').children('tr').length; //zlicznie
    for (var i = 0; i <= ile - 1; i++) {
        var k = $('#kurs' + i).text();
        var mark = $('#marked' + i).text();
        k = parseFloat(k);
        // var j= $('#jed'+i).text();
        // j=parseFloat(j);

        if (mark == "BTC-LTC") {
            // if (procent2(kurs, k) >= 0) {
            if (ltc >= k) {
                var a = k - ltc;
                $('#zysk' + i).text(a.toFixed(8)).css('color', 'green');
                console.log(procent(ltc, k), k, ltc, mark);
            } else if (ltc < k) {
                var a = k - ltc;
                $('#zysk' + i).text(a.toFixed(8)).css('color', 'red');
                console.log(procent(ltc, k), k, ltc, mark);
            }
        }
        if (mark == "BTC-ETH") {
            // if (procent2(kurs, k) >= 0) {
            if (eth >= k) {
                var a = k - eth;
                $('#zysk' + i).text(a.toFixed(8)).css('color', 'green');
                console.log(procent(eth, k), k, eth, mark);
            } else if (eth < k) {
                var a = k - eth;
                $('#zysk' + i).text(a.toFixed(8)).css('color', 'red');
                console.log(procent(eth, k), k, eth, mark);
            }
        }
        if (mark == "BTC-XRP") {
            // if (procent2(kurs, k) >= 0) {
            if (xrp >= k) {
                var a = k - xrp;
                $('#zysk' + i).text(a.toFixed(8)).css('color', 'green');
                console.log(procent(xrp, k), k, xrp, mark);
            } else if (xrp < k) {
                var a = k - xrp;
                $('#zysk' + i).text(a.toFixed(8)).css('color', 'red');
                console.log(procent(xrp, k), k, xrp, mark);
            }
        }
        if (mark == "BTC-USDT") {
            // if (procent2(kurs, k) >= 0) {
            if (btcu >= k) {
                var a = k - btcu;
                $('#zysk' + i).text(a.toFixed(8)).css('color', 'green');
                console.log(procent(btcu, k), k, btcu, mark);
            } else if (btcu < k) {
                var a = k - btcu;
                $('#zysk' + i).text(a.toFixed(8)).css('color', 'red');
                console.log(procent(btcu, k), k, btcu, mark);
            }
        }
        if (mark == "LTC-USDT") {
            // if (procent2(kurs, k) >= 0) {
            if (ltcu >= k) {
                var a = k - ltcu;
                $('#zysk' + i).text(a.toFixed(8)).css('color', 'green');
                console.log(procent(ltcu, k), k, ltcu, mark);
            } else if (ltcu < k) {
                var a = k - ltcu;
                $('#zysk' + i).text(a.toFixed(8)).css('color', 'red');
                console.log(procent(ltcu, k), k, ltcu, mark);
            }
        }
        if (mark == "ETH-USDT") {
            // if (procent2(kurs, k) >= 0) {
            if (ethu >= k) {
                var a = k - ethu;
                $('#zysk' + i).text(a.toFixed(8)).css('color', 'green');
                console.log(procent(ethu, k), k, ethu, mark);
            } else if (ethu < k) {
                var a = k - ethu;
                $('#zysk' + i).text(a.toFixed(8)).css('color', 'red');
                console.log(procent(ethu, k), k, ethu, mark);
            }
        }
    }
}




function d() {

    ajaxGet('https://bittrex.com/api/v1.1/public/getmarketsummaries',
        function (response) {
            response = JSON.parse(response);
            if (!response)
                return console.log("bittrex");;

            bittrex = response;

        });

}
