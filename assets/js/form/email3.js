        var value;
        var inputNo=1;
        var handleFileSelect = function(evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();

            reader.onload = function(readerEvt) {
                var binaryString = readerEvt.target.result;
                value = btoa(binaryString);
            };

            reader.readAsBinaryString(file);
        }
    };

    if (window.File && window.FileReader && window.FileList && window.Blob) {
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }

    function submitForm(e)
    {
                e.preventDefault();
                var fileName;
                var filter_email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
                var filter_contact = /^[0-9-+]+$/;
                var name = $(".input_name").val();
                var email = $(".input_email").val();
                var subject = $(".input_subject").val();
                var contact = $(".input_phone").val();
                var message = $(".input_message").val();
                var flag=0; 
                if(inputNo==1)
                {
                    fileName = $('.input_file-upload').val();
                }
                else if(inputNo==2)
                {
                    fileName = $('.input_file-upload2').val();
                }
                else if(inputNo==3)
                {
                    fileName = $('.input_file-upload3').val();
                }
                var fileExtsn=fileName.substr( (fileName.lastIndexOf('.')));
                if(value == null) {
                    flag=1;
                    $('.input_file-detail').val("Please upload your resume");
                    $('.input_file-detail2').val("Please upload your resume");
                    $('.input_file-detail3').val("Please upload your resume");
                }
                if (name == "" || email == "" || subject == "Subject" ||subject == "" || contact == "" || message == "")
                {
                    flag=1;
                    if (name == "")
                        {
                            $(".input_name").parent().parent().css("border", "1px solid red");
                            $(".input_name").attr("placeholder", "Please enter your Name ");
                            placeholdAnimate(".input_name");
                        }
                    if (email == "")
                        {
                            $(".input_email").parent().parent().css("border", "1px solid red");
                            $(".input_email").attr("placeholder", "Please enter your Email ");
                            placeholdAnimate(".input_email");
                        }
                    if (subject == "Subject"||subject == "")
                        {
                            $(".input_subject").parent().parent().css("border", "1px solid red");
                        }
                    if (contact == "")
                        {
                            $(".input_phone").parent().parent().css("border", "1px solid red");
                            $(".input_phone").attr("placeholder", "Please enter your conatct no");
                            placeholdAnimate(".input_phone");
                        }   
                    if (message == "")
                        {
                            $(".input_message").parent().parent().css("border", "1px solid red");
                            $(".input_message").attr("placeholder", "Please enter your message");
                            placeholdAnimate(".input_message");
                        }  
                        return false; 
                }
                else
                {   
                    if(!filter_email.test(email))
                        {
                            flag=1;
                            $(".input_email").val('');
                            $(".input_email").parent().parent().css("border", "1px solid red");
                            $(".input_email").attr("placeholder", "Please enter your Email correctly");
                            placeholdAnimate(".input_email");
                        }
                    if(!filter_contact.test(contact))
                        {
                            flag=1;
                            $(".input_phone").val('');
                            $(".input_phone").parent().parent().css("border", "1px solid red");
                            $(".input_phone").attr("placeholder", "Please enter your conatct no correctly");
                            placeholdAnimate(".input_phone");
                        }
                    else if((contact.length)>10||(contact.length)<9)
                        {
                            flag=1;
                            $(".input_phone").val('');
                            $(".input_phone").parent().parent().css("border", "1px solid red");
                            $(".input_phone").attr("placeholder", "Please enter your conatct no correctly");
                            placeholdAnimate(".input_phone");
                        }
                        return false;
                }   

                if(flag==0)
                        {
                            $.ajax(
                            {
                                type: "POST",
                                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                                data: {
                                    'key': 'fVUdEk-EJMBKTLq0gx5PRw',
                                    'message': {
                                        'from_email': email,
                                        'from_name': name,
                                        'headers': {
                                            'Reply-To': email
                                        },
                                        'subject': 'Job Application',
                                        "html":"A new job application has been submitted through contact form on your website, here are the details." + "<p>Name: "+name+"</p>" + "<p>Contact: " +contact+"</p>"+ "<p>Email: " +email+"</p>"+ "<p>Message: " +message+"</p>" ,
                                        'text': message,
                                        "attachments": [
                                        {
                                            "type": "text/plain",
                                            "name": "File"+fileExtsn,
                                            "content": value
                                        }],
                                        'to': [
                                        {
                                            'email': 'st970698@gmail.com',
                                            'name': 'Hashworks',
                                            'type': 'to'
                                        }]
                                    }
                                }
                            })
                            .done(function(response) {
                                alert('Your message has been sent. Thank you!'); // show success message
                                $(".input_name").val(''); // reset field after successful submission
                                $(".input_email").val(''); // reset field after successful submission
                                $(".input_subject").val('Subject'); // reset field after successful submission
                                $(".input_phone").val(''); // reset field after successful submission
                                $(".input_message").val(''); // reset field after successful submission
                            })
                            .fail(function(response) {
                                alert('Error sending message.');
                            });
                            return false;
                        }
    
    } //end of submitForm function

    function onClickText(inputElement){
    $(inputElement).parent().parent().css("border", "1px solid .input_0AB4C5");
    }   
    $('.input_name').click(function(){
        onClickText(this);
    });
    $('.input_email').click(function(){
        onClickText(this);
    });
    $('.input_subject').click(function(){
        onClickText(this);
    });
    $('.input_phone').click(function(){
        onClickText(this);
    });
    $('.input_message').click(function(){
        onClickText(this);
    });

    $('.input_file-upload').on('change',function(){
        inputNo=1;
        document.querySelector(".input_file-upload").addEventListener('change', handleFileSelect, false);
        var fileName = $('.input_file-upload').val();
        $('.input_file-detail').val(fileName);
    });


        $('.input_file-upload2').on('change',function(){
        inputNo=2;
        document.querySelector(".input_file-upload2").addEventListener('change', handleFileSelect, false);
        var fileName = $('.input_file-upload2').val();
        $('.input_file-detail2').val(fileName);
    });
            $('.input_file-upload3').on('change',function(){
        inputNo=3;
        document.querySelector(".input_file-upload3").addEventListener('change', handleFileSelect, false);
        var fileName = $('.input_file-upload3').val();
        $('.input_file-detail3').val(fileName);
    });

/* for placeholder of textbox animation*/
    function placeholdAnimate(element){
    var arr = new Array();
    var str=$(element).attr('placeholder');
    var tempStr='';
    for (var i = 0; i < str.length; i++) {
        arr.push(str.charAt(i));
    }
    $.each(arr, function (index, value) {
        setTimeout(function(){change(value)}, index * 50);
    });
    function change(value) {
            tempStr=tempStr+value;
        $(element).attr('placeholder', tempStr);
    }
    }