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
var nr = [94, 60, 193, 257, 262,265];
//var nr = [253, 257, 256, 261, 259, 95, 117,188,61];//apis poprawić

function d() {
    ajaxGet('https://bittrex.com/api/v1.1/public/getmarketsummaries',
        function (response) {
            response = JSON.parse(response);
            if (!response)
                return;
            // var a,i; 
            bittrex = response;

            for (i in bittrex) {            console.log(bittrex);        }
            $(document).ready(function () {


                function procent(m, w) {
                    var p = (w - m) / m * 100;
                    // console.log(p);
                    return p.toFixed(2) + " %";
                }

                for (var i = 0; i <= (nr.length/2)-1; i++) {

                   $('#btc').append('<tr> <td id="MARKET"><a href="">' + bittrex.result[nr[i]].MarketName + '</a></td><td id="VOL">' + bittrex.result[nr[i]].Volume.toFixed(4) + '</td><td id="LAST">' + bittrex.result[nr[i]].Last + '</td><td id="ZMIANA">' + procent(bittrex.result[nr[i]].PrevDay, bittrex.result[nr[i]].Last) + '</td>  <td id="BID">' + bittrex.result[nr[i]].Bid+ '</td><td id="ASK">' + bittrex.result[nr[i]].Ask+ '</td><td id="HIGH">' + bittrex.result[nr[i]].High + '</td><td id="LOW">' + bittrex.result[nr[i]].Low + '</td>  </tr>  ');
                }
                 for (var i = (nr.length/2); i <= (nr.length); i++) {

                    $('#usdt').append('<tr> <td id="MARKET"><a href="">' + bittrex.result[nr[i]].MarketName + '</a></td><td id="VOL">' + bittrex.result[nr[i]].Volume.toFixed(4) + '</td><td id="LAST">' + bittrex.result[nr[i]].Last + '</td><td id="ZMIANA">' + procent(bittrex.result[nr[i]].PrevDay, bittrex.result[nr[i]].Last) + '</td>  <td id="BID">' + bittrex.result[nr[i]].Bid + '</td><td id="ASK">' + bittrex.result[nr[i]].Ask + '</td><td id="HIGH">' + bittrex.result[nr[i]].High + '</td><td id="LOW">' + bittrex.result[nr[i]].Low + '</td>  </tr>  ');
                }
            });

        });

    /*$(function(){  
        $('<div>', {  
            'class': 'nowy',  
            text: 'Witaj',  
            click: function(){  
                $(this).css('color', 'red');  
            }  
        }).appendTo('body');  
    });  
 //$(document).ready(function () {
//$('#infotabel').wrap('<div class="demo"></div>'); //opakuj 
 
 //});
            $(document).ready(function () {
            
               $('#LAST').append(bittrex.result[0].Last);
                $('#VOL').append((bittrex.result[0].Volume).toFixed(4));
              
                $('#HIGH').append(bittrex.result[0].High);
                $('#LOW').append(bittrex.result[0].Low);
                                                   
          });

              for (i in bittrex) {
               if ( i==10)
                var a= this.bittrex.result[i];
                console.log(a);
              
            }
*/

}

d();


function wyloguj() {
  //  localStorage.setItem('user', 0);
 // document.getElementById(".wyl").innerHTML = '<a href='index.html' ><span>Wyloguj</span></a>' ;

}  


 
                  
//if(localStorage.getItem('user') != 0){}
          //        $('#wyl').append('<li></li> ');
  //  $('.last').append('<li class='last'><a href='../index.html' ><span>Wyloguj</span></a></li>') ;
               