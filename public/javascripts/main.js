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