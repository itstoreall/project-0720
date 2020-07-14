$(document).ready(function () {
  $("#index-form").submit(function () {
    $.ajax({
      type: "POST",
      url: "index-form.php",
      data: $(this).serialize(),
    }).done(function () {
      window.location = "/thanks.html";
    });
    return false;
  });
});
