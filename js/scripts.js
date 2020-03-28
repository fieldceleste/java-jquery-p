$(document).ready(function () {
  $("#questions").submit(function () {
    
      var nameInput = $("input#name").val();
      var desktop = parseInt($("#desktop").val());
      var animal = parseInt($("#animal").val());
      var programmer = parseInt($('input[name = "programmer"]:checked').val());
      var sites = parseInt($('input[name = "sites"]:checked').val());
      var experience = parseInt($("#experience").val());

      
      var result = desktop + animal + programmer + sites + experience;

      $(".name").text(nameInput);
      if (result <= 5) {
          $("#answer1").text("C# (sharp), cause you seem to like Windows based products. You will be able to build desktop and mobile applications, and game development!");
      } else if (result <= 10) {
          $("#answer1").text("Swift, cause you seem to like Apple based products. You will be able to build mobile apps on any IOS (apple) devices and can build desktop applications as well.");
      } else if (result <= 15) {
          $("#answer1").text("Ruby,so you can build web applicaions, desktop games, and mobile apps!");
      }
      

      event.preventDefault();
  });
});
