   var value;
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
        document.getElementById('file-upload').addEventListener('change', handleFileSelect, false);
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }

    function submitForm(e)
    {
                e.preventDefault();
                var fileName = $('#file-upload').val();
                var fileExtsn=fileName.substr( (fileName.lastIndexOf('.')));
                var filter_email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
                var filter_contact = /^[0-9-+]+$/;
                var name = $("#name").val();
                var email = $("#email").val();
                var subject = $("#subject").val();
                var contact = $("#phone").val();
                var message = $("#message").val();
                var flag=0; 
                if(value == null) {
                    flag=1;
                    $('#file-detail').val("Please upload your resume");
                }

                if (name == "" || email == "" || subject == "Subject" || contact == "" || message == "")
                {
                    flag=1;
                    if (name == "")
                        {
                            $("#name").parent().parent().css("border", "1px solid red");
                            $("#name").attr("placeholder", "Please enter your Name ");
                            placeholdAnimate("#name");
                        }
                    if (email == "")
                        {
                            $("#email").parent().parent().css("border", "1px solid red");
                            $("#email").attr("placeholder", "Please enter your Email ");
                            placeholdAnimate("#email");
                        }
                    if (subject == "Subject")
                        {
                            $("#subject").parent().parent().css("border", "1px solid red");
                        }
                    if (contact == "")
                        {
                            $("#phone").parent().parent().css("border", "1px solid red");
                            $("#phone").attr("placeholder", "Please enter your conatct no");
                            placeholdAnimate("#phone");
                        }   
                    if (message == "")
                        {
                            $("#message").parent().parent().css("border", "1px solid red");
                            $("#message").attr("placeholder", "Please enter your message");
                            placeholdAnimate("#message");
                        }   
                }
                else
                {   
                    if(!filter_email.test(email))
                        {
                            flag=1;
                            $("#email").val('');
                            $("#email").parent().parent().css("border", "1px solid red");
                            $("#email").attr("placeholder", "Please enter your Email correctly");
                            placeholdAnimate("#email");
                        }
                    if(!filter_contact.test(contact))
                        {
                            flag=1;
                            $("#phone").val('');
                            $("#phone").parent().parent().css("border", "1px solid red");
                            $("#phone").attr("placeholder", "Please enter your conatct no correctly");
                            placeholdAnimate("#phone");
                        }
                    else if((contact.length)>10||(contact.length)<9)
                        {
                            flag=1;
                            $("#phone").val('');
                            $("#phone").parent().parent().css("border", "1px solid red");
                            $("#phone").attr("placeholder", "Please enter your conatct no correctly");
                            placeholdAnimate("#phone");
                        }
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
                                $("#name").val(''); // reset field after successful submission
                                $("#email").val(''); // reset field after successful submission
                                $("#message").val(''); // reset field after successful submission
                            })
                            .fail(function(response) {
                                alert('Error sending message.');
                            });
                            return false;
                        }
        
    
    } //end of submitForm function

    function onClickText(inputElement){
    $(inputElement).parent().parent().css("border", "1px solid #0AB4C5");
    }   
    $('#name').click(function(){
        onClickText(this);
    });
    $('#email').click(function(){
        onClickText(this);
    });
    $('#subject').click(function(){
        onClickText(this);
    });
    $('#phone').click(function(){
        onClickText(this);
    });
    $('#message').click(function(){
        onClickText(this);
    });

    $('#file-upload').on('change',function(){
        var fileName = $('#file-upload').val();
        $('#file-detail').val(fileName);
    });


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