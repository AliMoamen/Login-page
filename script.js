const emailvalidate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function check(){
  var email = $("#email").val()
  var pass = $("#password").val()
  if(emailvalidate.test(email) == false){
    $(".email-icon").addClass("show")
  }
  if(pass.length < 8){
    $(".pass-icon").addClass("show")
  }
}

$("#email").click(function(){
  $(".email-icon").removeClass("show")
})
$("#password").click(function(){
  $(".pass-icon").removeClass("show")
})
$("#login").click(function(){
  check()
})
$(document).keydown(function(event){
  if(event.keyCode == 13){
    $("#login").click()
  }
})
