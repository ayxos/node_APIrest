$(document).ready(function(){
  $('input#update').click(function() { 
  	var id = $('#up_id').attr('value');
    var title = $('#update_title').value;
    var desc = $('#update_desc').value;
    var URL = "/api/entries/" + id;
	var dataObject = { 'title': title, 'description': desc };
	$.ajax({
        url: URL,
        type: 'PUT',    
        data: JSON.stringify(dataObject),
        dataType: 'json',
        success: function(result) {
            alert("success?");
        }
    });
    return false; // prevent default
  });
});