$(document).ready(function(){
  $("#check_form").bind("click", function(){
          var name = $("*").find("#input-name").val();
          var phone = $("*").find("#input-phone").val();
          if(!!name && !!phone){
              $.ajax({
                  type: "POST",
                  url: "email.php",
                  data: {"name": name,"phone": phone},
                  cache: false,
                  success: function(){
                      alert("Ждите звонка");
                  }
              })
          }
      return false;
  });
});