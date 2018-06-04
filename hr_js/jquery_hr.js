
	$(function() {
		$('#photo_hr').imagepreview({
			input: '[name="testimage1"]',
			reset: '#reset1',
			preview: '#photo_hr'
		});
		
	});

	 

	$(function() { 
        	$("#btnSave").click(function() {

	 /*
			html2canvas($("#widget"), {
				onrendered: function(canvas) {
					theCanvas = canvas;
					document.body.appendChild(canvas);

					// Convert and download as image 
					Canvas2Image.saveAsPNG(canvas); 
					//$("#img-out").append(canvas);
					
					// Clean up 
					//document.body.removeChild(canvas);
				}
			});*/
			/* html2canvas($("#widget")	, {
		onrendered: function(canvas) {
		  var img = canvas.toDataURL("image/png");
		  
		  $('body').append('<img id="hr_canvas_img" src="'+img+'"/>');
		  var $this = $('#hr_canvas_img');
			$this.wrap('<a href="' + $this.attr('src') + '" download/>');
			$("#download_final_image_hr").attr("disabled", false);
		}
		
	 	 }); */
		
		 html2canvas($("#widget"), {
      onrendered: function(canvas) {
        saveAs(canvas.toDataURL(), 'shiv.png');
      }
    });	
          });  
		
		
	
  function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }	
		
		
		
	}); 


	$(document).ready(function(){
		$('#download_final_image_hr').click(function(){
			
			$('#hr_canvas_img').click();		
			//var $this = $('#hr_canvas_img');
			//$this.wrap('<a href="' + $this.attr('src') + '" download/>');
			//$('#img_click').click();
		});
	});



	 
