$(document).ready(function() {
  $("#blanks form").submit(function() {
    var person1Input = $("input#person1").val();
    var person1Input = person1Input.toUpperCase();
    $(".person1").text(person1Input);
    event.preventDefault();
  });
});
