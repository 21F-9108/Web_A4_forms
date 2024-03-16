$(document).ready(function(){

    $('form').submit(function(event){
        event.preventDefault();
        firstname_check_f();
        lastname_check_f();
        username_check_f();
        email_check_f();
        dob_check_f();
        tel_check_f();
        pass_check_f();

    });

    function firstname_check_f(){
        var firstname=$('#firstname').val();
        if (firstname.length===0){
            $('#firstname_check').show();
            $('#firstname_check').html("Please fill this field");
            $('#firstname_check').css("color","rgb(200 0 0)");

            
        }
        else{
            $('#firstname_check').hide();
        }
    }
    function lastname_check_f(){
        var lastname=$('#lastname').val();
        if (lastname.length===0){
            $('#lastname_check').show();
            $('#lastname_check').html("Please fill this field");
            $('#lastname_check').css("color","rgb(200 0 0)");
        }
        else{
            $("#lastname_check").hide()
        }
    }
    function username_check_f(){
        var username=$('#username').val();
        if (username.length===0){
            $('#username_check').show();
            $('#username_check').html("Please fill this field");
            $('#username_check').css("color","rgb(200 0 0)");
        }
        else{
            $("#username_check").hide()
        }
    }
    function email_check_f(){
        var email=$('#email').val();
        if (email.length===0){
            $('#email_check').show();
            $('#email_check').html("Please fill this field");
            $('#email_check').css("color","rgb(200 0 0)");
        }
        else if(!email.includes("@")){
            $('#email_check').show();
            $('#email_check').html("Email should  contain '@'");
            $('#email_check').css("color","rgb(200 0 0)");
        }
        else if(!email.endsWith(".com")){
            $('#email_check').show();
            $('#email_check').html("Email should  end with '.com'");
            $('#email_check').css("color","rgb(200 0 0)");
        }
        else if( email.indexOf("@") > email.indexOf(".") - 1){
            $('#email_check').show();
            $('#email_check').html("'.' used incorrectly");
            $('#email_check').css("color","rgb(200 0 0)");
        }
        else{
            $("#email_check").hide()
        }
    }
    function dob_check_f(){
        var dob=$('#dateofbirth').val();
        
        if (dob.length===0){
            $('#dob_check').show();
            $('#dob_check').html("Please fill this field");
            $('#dob_check').css("color","rgb(200 0 0)");
        }
        else{
            var date_today=new Date();
            var birthdate=new Date(dob);
            var age=date_today.getFullYear()-birthdate.getFullYear();
            var month = date_today.getMonth() - birthdate.getMonth();

            if (month < 0 || (month === 0 && date_today.getDate() < birthdate.getDate())) {
                age--;
            }
            
            if (age<13 || age>50){
                $('#dob_check').show();
                $('#dob_check').html("Age not eligible");
                $('#dob_check').css("color","rgb(200 0 0)");
            }
            
            else{
               $("#dob_check").hide();
            }
            
        }
    }
    function tel_check_f(){
        var tel=$('#tel').val();
        var regex = /^0\d{3} \d{7}$/;
        if (tel.length===0){
            $('#tel_check').show();
            $('#tel_check').html("Please fill this field");
            $('#tel_check').css("color","rgb(200 0 0)");
        }
        else if(!regex.test(tel)){
            $('#tel_check').show();
            $('#tel_check').html("Invalid (use format: 0123 1234567)");
            $('#tel_check').css("color","rgb(200 0 0)");
        }
        else{
            $("#tel_check").hide()
        }
    }
    function pass_check_f(){
        var password=$('#password').val();
        var regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

        if (password.length===0){
            $('#pass_check').show();
            $('#pass_check').html("Please fill this field");
            $('#pass_check').css("color","rgb(200 0 0)");
        }
        

        else if (password.length<=8){
            $('#pass_check').show();
            $('#pass_check').html("Too short");
            $('#pass_check').css("color","rgb(200 0 0)");
        }

        else if (!regex.test(password)){
            $('#pass_check').show();
            $('#pass_check').html("Password should contain atleast <br> 1 alphabet and 1 number");
            $('#pass_check').css("color","rgb(200 0 0)");

        }
        else{
            $("#pass_check").hide()
            cpass_check_f();

        }
    }
    function cpass_check_f(){
        var c_password=$('#c_password').val();
        var password=$('#password').val();
        if (c_password.length===0){
            $('#cpass_check').show();
            $('#cpass_check').html("Please fill this field");
            $('#cpass_check').css("color","rgb(200 0 0)");
        }
        else if (password!=c_password){
            $('#cpass_check').show();
            $('#cpass_check').html("Password does not match")
        }
        else{
            $("#cpass_check").hide()
        }


    }

    $('input').mouseenter(function(){
        $(this).css("background-color","rgb(79, 65, 85,0.3)")
    })
    $('input').mouseleave(function(){
        $(this).css("background-color","transparent")
    })
});
