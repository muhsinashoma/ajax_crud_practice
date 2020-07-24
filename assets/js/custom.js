//$ sign has to convert into jquery . this used for f resetting . This setting is needed for laravel and ward press frame

(function ($) {
	$(document).ready(function(){

		 //show student_add_modal
		$('a#student_show').click(function () {
			$('#student_add_modal').modal('show');
			return false;
        });

        //show single_show

		$('a#single_show').click(function(){
			$('#single_student_modal').modal('show');
			return false;  //remove for  #sing;
        });


		
    });
})(jQuery)



// (function($){
// 	$(document).ready(function(){
//
// 		// Show student_add_modal
// 		$('a#student_show').click(function(){
// 			$('#student_add_modal').modal('show');
//
// 			return false;
// 		});
//
// 		// Show student_add_modal
// 		$('a#single_show').click(function(){
// 			$('#single_student_modal').modal('show');
//
// 			return false;
// 		});
//
//
//
// 	});
// })(jQuery)