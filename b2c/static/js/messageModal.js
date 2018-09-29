var MessageModal = {
	dom : 
		$("<div class='modal fade'>" +
			"<div class='modal-dialog modal-sm'>" +
				"<div class='modal-content'>" +
					"<div class='modal-header'>" +
						"<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
							"<span aria-hidden='true'>×</span>" +
						"</button>" +
						"<h4 class='modal-title'>通知!</h4>" +
					"</div>" +
					"<div class='modal-body tecenter pdb15 messageContent'>" +
					"</div>" +
					"<div class='modal-footer pdt10'>" +
					"</div>" +
				"</div>" +
			"</div>" +
		"</div>"),
	showMessage : function(message){
		this.dom.find(".messageContent").text(message);
		this.dom.modal("show");
	}
}

function adModal(default_txt, makebtn, showCallback, hideCallback) {
	var defaulbtn = '';
	if (makebtn) {
		defaulbtn = '<button type="button" class="btn btn-default pull-left btn-sm" data-dismiss="modal">取消</button>'
				+ '<button type="button" class="btn btn-primary btn-sm" data-dismiss="modal" id="closeMod">确认</button>';
	} else {
		defaulbtn = '';
	}

	var defaultModal = '<div class="modal fade" id="defaultModal">'
			+ '<div class="modal-dialog modal-sm">'
			+ '<div class="modal-content">'
			+ '<div class="modal-header">'
			+ '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
			+ '<h4 class="modal-title">通知!</h4>' + '</div>'
			+ '<div class="modal-body tecenter pdb15">' + default_txt
			+ '</div>' + '<div class="modal-footer pdt10">' + defaulbtn
			+ '</div>' + '</div>' + '</div>' + '</div>';

	if ($('#defaultModal').length === 0) {
		$('body').append(defaultModal);
	}

	$('#defaultModal').modal();
	$('#defaultModal').on('shown.bs.modal', function(e) {
		if (showCallback) {
			showCallback();
		}
	});
	$('#defaultModal').on('hidden.bs.modal', function(e) {
		if (hideCallback) {
			hideCallback();
		}
		$('#defaultModal').remove();
	})
}