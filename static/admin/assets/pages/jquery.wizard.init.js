/**
* Theme: Syntra Admin Template
* Author: Mannat-themes
* Wizard
*/

$(function ()
            {
                $(".wizard").steps({
                    headerTag: "h2",
                    bodyTag: "section",
                    transitionEffect: "slideLeft",
                });
                $("#wizard-vertical").steps({
                    headerTag: "h2",
                    bodyTag: "section",
                    transitionEffect: "slideLeft",
                    stepsOrientation: "vertical"
                });

                $(document).ready(function(){
                $("#tutor_mapping").validate({
        rules:{
            aot_user_id:{
                required:true
            },
            aot_clascourse_mapping_id:{
                required:true
            },
              aot_no_of_months:{
                required:true
              },
              aot_start_date:{
                required:true
              },
              aot_end_date:{
                required:true
              },
               aot_price_per_student:{
                required:true
              },
               aot_students_limit:{
                required:true
              }
            },
             submitHandler: function(form) {
            // Serialize form data into a JSON object
              //var formData = $('#course').serialize();
    		  var formData = new FormData(form);

              // Send AJAX request to server
              $.ajax({
                type: "POST",
                url: "/course/instructor_enroll_create",
              data: formData,
    		   dataType: "JSON",
    			processData: false,
    			contentType: false,
                success: function (response) {
                  // Handle success response

                  if (response.status == 200){
    					var messsage ="Course Created successfully"
                  		alert_message(response.messages,'success','','/course/instructor_course_enroll')

                  }else if (response.status == 500){
    					alert_message(response.message,'error','Oops..','/profile')
                  }
                },
              });
        },

         errorElement : 'div',
                    errorPlacement: function(error, element) {
                      var placement = $(element).data('error');
                      if (placement) {
                        $(placement).append(error)
                      } else {
                        $(element).closest('div').after(error)
                      }
                    }
        })

})



            });
