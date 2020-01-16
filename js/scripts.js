$(document).ready(function() {
  $("#btn").click(function() {
    var fanimal = $("input:radio[name=animal]:checked").val();

    if (fanimal === "blue") {
        document.body.style.backgroundColor = "wombats";
    } else if (fanimal === "yellow") {
      document.body.style.backgroundColor = "pacaranas";

    } else if (fanimal === "red") {
      document.body.style.backgroundColor = "red pandas";
    } else {
      document.body.style.backgroundColor = "black";
    }
    event.preventDefault();
    });
  });