// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
$(document).ready(function(){
  $(".boxes").click(function() {

    var endpoint = "https://flynn.boolean.careers/exercises/api/random/int";
    var self = $(this);

    $.ajax(
     {
       "url" : endpoint,
       "method" : "GET",
       "success" : function (data, stato) {
         var numRandom = data.response;

         if(numRandom <= 5){
           self.addClass("style-yellow");
           self.removeClass("style-green");
           self.text(numRandom);
         } else if (numRandom > 5){
           self.addClass("style-green");
           self.removeClass("style-yellow");
           self.text(numRandom);
         }
       },
       error: function (richiesta, stato, errori) {
       }
     }
    );
  });
});
