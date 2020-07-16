$(document).ready(function () {
  $("#polupritsep-form").submit(function () {
    $.ajax({
      type: "POST",
      url: "polupritsep-form.php",
      data: $(this).serialize(),
    }).done(function () {
      window.location = "/thanks.html";
    });
    return false;
  });
});
