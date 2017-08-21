$(document).ready(function(){
  $("#second-step").hide();
  $("#third-step").hide();
  $("#white-shoe").hide();
  $("#blue-shoe").hide();
  $("#black-shoe").hide();
  $("#red-shoe").hide();

  $("form#nameForm").submit(function(event){
    event.preventDefault()

    var username = $("input#username").val();
    $("#first-step").hide();
    $("#insertname").append(username);
    $("#second-step").show();
  });

  $("form#base-color-form").submit(function(event){
    event.preventDefault();

    var colorchoice = $("input:radio[name=base-color]:checked").val()
    console.log(colorchoice);
    $("#second-step").hide();

    if (colorchoice == "white") {
      $("#white-shoe").show();
    } else if (colorchoice == "blue") {
      $("#blue-shoe").show();
    } else if (colorchoice == "black") {
      $("#black-shoe").show();
    } else if (colorchoice == "red"){
      $("#red-shoe").show();
    } else {
      alert("error!");
    }

    $("#third-step").show();

  })
});
