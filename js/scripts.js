$(document).ready(function(event) {
  $("#celeb").submit(function(event) {
    event.preventDefault();
    var gender = $("input#gender").val();
    var age = parseInt($("input#age").val());
    console.log("we've established variables");
    if(gender === "male" && age < 25) {
      alert("Your perfect match is Selena Gomez!!");
    } else if (gender === "male" && age > 25) {
      alert("Your perfect match is Sandra Buttocks!!");
    } else {
      alert("Your perfect match is Hugh Jackman!!");
    }
  });
});
