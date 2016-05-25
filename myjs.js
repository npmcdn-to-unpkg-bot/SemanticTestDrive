$(document).ready(function(){

	//Escondendo todos os Point Labels
	$("#nomePointLabel").hide();
	$("#sobrenomePointLabel").hide();
	$("#emailPointLabel").hide();
	$("#confirmaEmailPointLabel").hide();

	//ao clicar no submit executa esta função que percorre todos os ifs
	$("#submitBtn").click(function() {

		if (!$("#name").val()) {
			$("#nomePointLabel").show();
		} else {
			$("#nomePointLabel").hide();
		}

		if (!$("#lastName").val()) {
			$("#sobrenomePointLabel").show();
		} else {
			$("#sobrenomePointLabel").hide();
		}

		if(!$("#inMail").val()) {
			$("#emailPointLabel").show();
		} else {
			$("#emailPointLabel").hide();
		}

		if(!$("#confMail").val()) {
			$("#confirmaEmailPointLabel").show();
		} else {
			$("#confirmaEmailPointLabel").hide();
		}

	});

	//Ao clicar no botão clear, todos os point labels são setados como HIDE
	$("#clearBtn").click(function() {
		$("#nomePointLabel").hide();
		$("#sobrenomePointLabel").hide();
		$("#emailPointLabel").hide();
		$("#confirmaEmailPointLabel").hide();
	})

});
