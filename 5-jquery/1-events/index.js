$("#btn-1").click(function () {
  $("p").hide();
});

$("#btn-2").on("click", function () {
  $("p").show();
});

$("#btn-3").on("click", function () {
  $("p").toggle();
});

// $("#btn-4").hover(function () {
//   $("p").hide();
// });

// $("#btn-4").dblclick(function () {
//   $("p").text("button double clicked!!!!!!!!!!!!!!!!!!");
// });

$("#btn-4").on("dblclick", function () {
  $(this).text("dblclick");
  $("p").text("button double clicked!!!!!!!!!!!!!!!!!!");
});

$("#number").focus(function () {
  $(this).val(125645876);
});

$("#number").blur(function () {
  $(this).val($(this).val() * 2);
});

$("form").submit(onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const inputs = $("input");
  for (const input of inputs) {
    console.log($(input).val());
  }
}
