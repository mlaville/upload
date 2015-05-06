window.addEventListener( 'load', function() {
	var divUpload = document.getElementById("div-upload"),
		uploader = new qq.FileUploader({
			element: divUpload,
			action: './php/testUpload.php?rep=',
			onComplete: function(id, fileName, responseJSON){
				if(responseJSON.success) {
				//	alert(fileName + '\nok');
				} else {
					alert(fileName + '\nerreur');
				}
			},
			fileTemplate: '<li>' +
					'<span class="qq-upload-file"></span>' +
					'<span class="qq-upload-spinner"></span>' +
					'<button class="qq-upload-cancel" type="button"></button>' +
					'<progress class="qq-upload-progress"></progress>' +
					'<div class="qq-upload-size"></div>' +
					'<span class="qq-upload-failed-text">Failed</span>' +
				'</li>',
			classes: {
				// used to get elements from templates
				button: 'qq-upload-button',
				drop: 'qq-upload-drop-area',
				dropActive: 'qq-upload-drop-area-active',
				list: 'qq-upload-list',
							
				file: 'qq-upload-file',
				spinner: 'qq-upload-spinner',
				size: 'qq-upload-size',
				progress: 'qq-upload-progress',
				cancel: 'qq-upload-cancel',

				// added to list item when upload completes
				// used in css to hide progress spinner
				success: 'qq-upload-success',
				fail: 'qq-upload-fail'
			}
		});           

	return;
});
