$(document).ready(function(){
  $("#second-step").hide();
  $("#third-step").hide();
  $("#fourth-step").hide();
  $("#white-shoe").hide();
  $("#blue-shoe").hide();
  $("#black-shoe").hide();
  $("#red-shoe").hide();

  var globalUserName;
  var globalShoeColor;

  $("form#nameForm").submit(function(event){
    event.preventDefault()

    var username = $("input#username").val();
    globalUserName = username
    $("#first-step").hide();
    $("#insertname").append("<h1>Hey " + username + "! Let's get started.</h1>");
    $("#second-step").show();
  });

  $("form#base-color-form").submit(function(event){
    event.preventDefault();
    var colorchoice = $("input:radio[name=base-color]:checked").val()
    globalShoeColor = colorchoice
    $("#second-step").hide();

    if (colorchoice == "white") {
      shoePersonality = "gentle";
      $("#white-shoe").show();
    } else if (colorchoice == "blue") {
      shoePersonality = "conventional";
      $("#blue-shoe").show();
    } else if (colorchoice == "black") {
      shoePersonality = "stealth";
      $("#black-shoe").show();
    } else if (colorchoice == "red"){
      shoePersonality = "passionate";
      $("#red-shoe").show();
    } else {
      alert("error!");
    }
    $("#shoe-personality").empty();
    $("#shoe-color-word").empty();
    $("#shoe-personality").append(shoePersonality)
    $("#shoe-color-word").append(colorchoice)
    $("#third-step").show();
  })

  $("#like-it").click(function(){
    $("#third-step").hide();
    $("#fourth-step-h1").append("<h1>Okay " + globalUserName + ", " + globalShoeColor + " will be your base.</h1>")
    $("#fourth-step").show();
  });

  $("#try-again").click(function(){
    $("#third-step").hide();
    $("#white-shoe").hide();
    $("#blue-shoe").hide();
    $("#black-shoe").hide();
    $("#red-shoe").hide();
    $("#insertname").empty();
    $("#insertname").append("<h1>Alright " + globalUserName + ", let's try again.</h1>");
    $("#fourth-step-h1").empty();
    $("#second-step").show();
  });

  $("form#final-customization").submit(function(event){
    event.preventDefault();
    var fruit = $("#fruit").val();
    var location = $("#location").val();
    var friends = $("#friends").val();
    var deepdown = $("#deepdown").val();

    console.log("fruit: ", fruit, " location: ", location, " friends: ", friends, " deep down: ", deepdown);
  });
});
