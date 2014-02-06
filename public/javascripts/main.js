$(document).ready(function(){

    $('input#update').click(function() {
        var clave = $('#keys').val();
        var valor = $('#value').val();

        var arr = {};
        arr[clave] = valor;
        console.log(arr);

        var id = $(this).attr('data-id');
        var URL = ("/api/entries/" + id);
        // var arr2 = { 'title': 'prueba1up', 'description': 'update' };
        return $.ajax({
             type: "PUT",
             url: URL,
             contentType: "application/json; charset=utf-8",
             data: JSON.stringify(arr),
             dataType: "json",
             success: function (data, status, jqXHR) {
                 console.log("Updating success");
                 location.reload();
             },
             error: function (jqXHR, status) {
                console.log("Update fail");
                console.log(status);
                console.log(jqXHR);
             }
        });
    });

    $('input#del').click(function() {
        var id_del = $(this).attr('data-id');
        var URL = ("/api/entries/" + id_del);
        console.log('Data: ' + id_del + ' ' + URL);
        return $.ajax({
             type: "DELETE",
             url: URL,
             success: function (data, status, jqXHR) {
                 console.log("Delete object");
                 location.href='/';
             },
             error: function (jqXHR, status) {
                 console.log("fail");
             }
        });
    });

});

// document.addEventListener('DOMContentLoaded', function() {

//     document.getElementById("update").addEventListener("click", function(e) {
//         console.log("you clicked " + e.target);
//         e.preventDefault();

//         var URL = ("/api/entries/" + id);

//         var clave = document.getElementById('keys').value;
//         var valor = document.getElementById('value').value;

//         var arr = {};
//         arr[clave] = valor;
//         console.log(arr);
//         var data = JSON.stringify(arr);

//         var id = this.getAttribute('data-id');
//         var URL = ("/api/entries/" + id);

//         var request = new XMLHttpRequest();
//         request.open('PUT', URL, true);

//         request.onload = function() {
//           if (request.status >= 200 && request.status < 400){
//             console.log("Updating success", request);
//             // location.reload();
//             // resp = request.responseText;
//           } else {
//             // We reached our target server, but it returned an error
//             console.log("Update fail");
//             console.log(status);
//             console.log(jqXHR);
//           }
//         }

//         request.onerror = function() {
//           // There was a connection error of some sort
//           console.log('error on req');
//         }
//         request.send(data);
//     });
// });