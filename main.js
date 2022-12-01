$(document).ready(function(){
    $("#cuestionario").hide();
    $("#btnEnviar").hide();
    $("#empezar").click(function(){
        $("#cuestionario").show();
        $("#btnEnviar").show();
        $("#empezar").hide();
       
    });
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
          
        }
      });
    $("#btnEnviarr").click(function(){
        var puntuacion=0;
        if($('#p1r1').is(':checked')){
            puntuacion+=1;
        }
        if($('#p2r2').is(':checked')){
            puntuacion+=1;
        }
        if($('#p3r3').is(':checked')){
            puntuacion+=1;
        }
        if($('#p4r4').is(':checked')){
            puntuacion+=1;
        }
        if($('#p5r5').is(':checked')){
            puntuacion+=1;
        }
        if($('#p6r6').is(':checked')){
            puntuacion+=1;
        }
        if($('#p7r7').is(':checked')){
            puntuacion+=1;
        }
        if($('#p8r8').is(':checked')){
            puntuacion+=1;
        }
        if($('#p9r9').is(':checked')){
            puntuacion+=1;
        }
        if($('#p10r10').is(':checked')){
            puntuacion+=1;
        }
       alert("Tu puntuacion es "+puntuacion + "/5");
       new Notification("Notificacion", {
        body: 'realizaste el test',
        icon: 'https://thumbs.dreamstime.com/b/signo-de-emoticono-feliz-emoji-apuntando-hacia-arriba-teniendo-una-idea-233677854.jpg',
        vibrate: [100, 100, 100],
        onClick: function () {
          window.location = "https://google.es"
        }
      });
    });
});