function ajax_rejstracja() {

    var url = 'php/rejstracja.php';
    var imie = $('#imie').val();
    var naz = $('#naz').val();
    var has = $('#has').val();
    var has2 = $('#has2').val();
    var meil = $('#meil').val();

    if (has != has2) {
        $('#info').html("Rużne hasła");
        return false;
    }
    $.ajax({
        url: url,
        dataType: 'json',
        type: 'POST',
        data: {
            imie: imie,
            naz: naz,
            has: has,
            meil: meil
        },
        success: function (response) {
            console.log(response);
            // $('#info').html('');
            $('#info').html("Operacja powiodłasię teraz Możesz się zalogować ");
            //  $('#posiadasz4').val(total);
            //$('#info').css('color', 'green');
            location.href = "logowanie.html";


        }
    });

}

var calculateComplexity = function (password) {
  var complexity = 0;
  
  var regExps = [ 
    /[a-z]/,
    /[A-Z]/,
    /[0-9]/,
    /.{8}/,
    /.{16}/,
    /[!-//:-@[-`{-ÿ]/
  ];
  
  regExps.forEach(function (regexp) {
    if (regexp.test(password)) {
      complexity++;
    }
  });
  
  return {
    value: complexity,
    max: regExps.length
  };
};
 
var checkPasswordStregth = function (password) {
  var progress = document.querySelector('#passwordComplexity'),
      complexity = calculateComplexity(this.value); 
  
  progress.value = complexity.value;
  progress.max = complexity.max;
};

var input = document.querySelector('#passwordField');
input.addEventListener('keyup', checkPasswordStregth);


function logowanie() {
    var log = $('#logi').val();
    var has = $('#has').val();
    var url = 'php/logowanie.php'; //http://localhost:82/Projekt/Waluty/php/buy.php    
    $.ajax({
        url: url,
        dataType: 'json',
        type: 'POST',
        data: {
            log: log,
            has: has
        },
        success: function (response) {
            console.log(response);
            if (response == null) {
                $('#info').html('Złe hasło sprubuj ponownie ').css('color', 'red');
                return false;
            } else
                $('#info').html('Witam').css('color', 'green');
            localStorage.setItem('user', response);
            var retrievedObject = localStorage.getItem('user');
            console.log(retrievedObject);

            location.href = "../index.html";

        }
    });
}

function wyloguj() {
    localStorage.setItem('user', 0);
}

function zapisz() {
    localStorage.setItem();
}

function odczytaj() {
    localStorage.getItem();
}

function skasuj() {

    localStorage.removeItem();
}

function wyswietl() {
    var zawartosc = '';
    for (var klucz in localStorage)
        zawartosc += (klucz + ' ' + localStorage.getItem(klucz) + 'rn');
    alert(zawartosc);
}
//  if ((has == "" &&log == "")|| has == "" ||log == "" ) {  $('#info').html("Nie podałeś wszystkich danych")
//      return false;    }
/* if (window.XMLHttpRequest) {

     xmlhttp = new XMLHttpRequest();
 } else {

     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 }
 xmlhttp.onreadystatechange = function () {
     if (this.readyState == 4 && this.status == 200) {
         document.getElementById("info").innerHTML = this.responseText;
         localStorage.setItem('user', this.responseText);
         var retrievedObject = localStorage.getItem('user');
         console.log(retrievedObject);
         console.log(this.responseText);
         if (this.responseText == 0 || this.responseText == null) {
             $('#info').html("niema takiego konta");
             return false;
         }
         localStorage.setItem('user', this.responseText);
         var retrievedObject = localStorage.getItem('user');
         console.log(retrievedObject);
     }
 }
 xmlhttp.open("GET", "php/logowanie.php?log=" + log + ",?q=" + has, true);
 xmlhttp.send();*/
