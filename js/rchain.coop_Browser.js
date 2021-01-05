/* Footer Form */
$("#newsletterSubmit").click(function (event) {
  event.preventDefault();
  var data = $("#newsletterForm").serialize();
  $.ajax({
    type: "POST",
    url: "newsletter-submission",
    data: data,
    dataType: "json",
  }).done(function (data) {
    if (!(data[0] == "success")) {
      $("#submitFail").html("");
      for (var item in data) {
        $("#submitFail").css("display", "inline-block");
        $("#submitFail").append('<div class="errors">' + data[item] + "</div>");
      }
    } else {
      $("#submitFail").css("display", "none");
      $("#submitSuccess").css("display", "inline-block");
      $("#submitSuccess").append(
        "<div class='success'>Thank you for your submission</div>"
      );
      $("#newsletterForm").css("display", "none");
    }
  });
});
