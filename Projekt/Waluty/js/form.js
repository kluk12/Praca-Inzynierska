$(document).ready(function () {
    $(".text").change(function () {
        //s alert("The text has been changed.");
        var i = $("#have").val();
        var c = $("#cena").val();
        var ca = $("#have").val();
        if (c != 0 && ca != 0 && i == 0) {
            i = c * ca;
            console.log(i.toFixed(8));
        } else if (c != 0 && ca == 0 && i != 0) {
            ca = c / i;
            console.log(ca.toFixed(8));
        } else if (c == 0 && ca != 0 && i != 0) {
            c = ca / i;
            console.log(c.toFixed(8));
        }
    });
});
//$ ( "#have" ).numeryczne({allowEmpty : true , live : true }, function ( val ) {   console . log (val); });
