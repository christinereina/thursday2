
$(document).ready(function() {
   $(".btn").click(function() {

    var fanimal = $("input:radio[name=animal]:checked").val();
    console.log(fanimal);

    if (fanimal === "wombats") {
    $(".wombats-hidden").toggle();
   
    } else if (fanimal === "pacaranas") {
      $(".pacaranas-hidden").toggle();
   
    } else if (fanimal === "red pandas") {
      $(".redPandas-hidden").toggle();

    } else {
      document.body.style.backgroundColor = "black"; 
    }
    event.preventDefault();
    });
  });