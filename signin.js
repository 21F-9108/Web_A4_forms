$(document).ready(function(){
   
    $('form').submit(function(event){
        
        event.preventDefault();
        username_check_f();
        password_check_f();
        

    });

    function username_check_f(){
        var username=$('#username').val();
        if (username.length===0){
            $('#username_check').show();
            $('#username_check').html("Please fill this field");
            $('#username_check').css("color","rgb(200 0 0)");
        }
        else{
            $("#username_check").hide();
        }
    }

    function password_check_f(){
        var password=$('#password').val();
        if (password.length===0){
            $('#pass_check').show();
            $('#pass_check').html("Please fill this field");
            $('#pass_check').css("color","rgb(200 0 0)");
        }
        else{
            $("#pass_check").hide();
        }
    }
    $('input').mouseenter(function(){
        $(this).css("background-color","rgb(79, 65, 85,0.3)")
    })
    $('input').mouseleave(function(){
        $(this).css("background-color","transparent")
    })
});