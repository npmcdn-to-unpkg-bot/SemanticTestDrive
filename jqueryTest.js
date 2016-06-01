$(document).ready(function() {
	$('#okClick').click(function() {
		var teste = $('#inpot').val();
		$('.list').append("<div>" + teste + "</div>");
	});
});