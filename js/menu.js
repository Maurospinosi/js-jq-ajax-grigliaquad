// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
$(document).ready(function(){
  $("body").click(function() {

    var endpoint = "https://flynn.boolean.careers/exercises/api/random/int";

    $.ajax(
     {
       "url" : endpoint,
       "method" : "GET",
       "success" : function (data, stato) {
         var numRandom = data.response;
         if(numRandom <= 5){
           $(".boxes").addClass("style-yellow");
           $(".boxes").removeClass("style-green");
           $(".numero").text(numRandom);
         } else if (numRandom > 5){
           $(".boxes").addClass("style-green");
           $(".boxes").removeClass("style-yellow");
           $(".numero").text(numRandom);
         }
       },
       error: function (richiesta, stato, errori) {
       }
     }
    );
  });
});
