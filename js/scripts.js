$(document).ready(function () {
  $("#questions").submit(function () {
      var nameInput = $("input#name").val();
      var desktop = parseInt($('input[name = "desktop"]:checked').val());
      var animal = parseInt($('input[name = "animal"]:checked').val());
      var programmer = parseInt($("#programmer").val());
      var sites = parseInt($("#sites").val());
      var experience = parseInt($("#experience").val());
      var result = desktop + animal + programmer + sites + experience;

      

      $(".name").text(nameInput);
      if (result <= 4) {
          $("#answer").text("C# (sharp), cause you seem to like Windows based products. You will be able to build desktop and mobile applications, and game development!");
      } else if (result <= 11) {
          $("#answer").text("Swift, cause you seem to like Apple based products. You will be able to build mobile apps on any IOS (apple) devices and can build desktop applications as well.");
      } else if (result <= 16) {
          $("#answer").text("Ruby,so you can build web applicaions, desktop games, and mobile apps!");
      }
      $( "submit" ).click(function() {
        $( "p" ).show( "slow" );
      });

      event.preventDefault();
  });
});