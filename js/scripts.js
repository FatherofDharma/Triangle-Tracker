//Business logic section of code.







//User interface logic.
$(document).ready(function() {
  $("#triangle").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("#sideA").val());
    var side2 = parseInt($("#sideB").val());
    var side3 = parseInt($("#sideC").val());

        if (side1 === side2 && side2 === side3 && side1 === side3) {

          $("#equil").show();
          $("#iso").hide();
          $("#scal").hide();
          $("#no").hide();
        } else if (side1 === side2 || side1 === side3 || side2 === side3){
          $("#equil").hide();
          $("#iso").show();
          $("#scal").hide();
          $("#no").hide();
        } else if ((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2) {
          $("#equil").hide();
          $("#iso").hide();
          $("#scal").hide();
          $("#no").show();
        } else {
          $("#equil").hide();
          $("#iso").hide();
          $("#scal").show();
          $("#no").hide();
        }

  });
});
