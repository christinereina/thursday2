$(document).ready(function() {
   $(".btn").click(function() {

    var fanimal = $("input:radio[name=animal]:checked").val();
    console.log(fanimal);

    if (fanimal === "wombats") {
    $(".wombats-hidden").show();

    } else if (fanimal === "pacaranas") {
      $(".pacaranas-hidden").show();

    } else if (fanimal === "red pandas") {
      $(".redPandas-hidden").show();

    } else {
      document.body.style.backgroundColor = "black"; 
    }
    event.preventDefault();
    });
  });