$(document).ready(function() {
   $(".btn").click(function() {

    var fanimal = $("input:radio[name=animal]:checked").val();
    console.log(fanimal);

    if (fanimal === "wombats") {
    $(".wombats-hidden").show();
    $("#wombats-showing").toggle();

    } else if (fanimal === "pacaranas") {
      $(".pacaranas-hidden").show();
      $("#pacaranas-showing").toggle();
   
    } else if (fanimal === "red pandas") {
      $(".redPandas-hidden").show();
      $("#redPandas-showing").Toggle();

    } else {
      document.body.style.backgroundColor = "black"; 
    }
    event.preventDefault();
    });
  });