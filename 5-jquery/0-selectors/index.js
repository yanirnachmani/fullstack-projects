console.log($(".header").text());
// console.log($("p").text());

$("p").text($("#header-1").text());

const headers = $(".header");

for (const header of headers) {
  console.log($(header).text());
  $(header).css("color", "blue");
}

$("div p").hide();
$("div").show();

$("li:even").css("background-color", "blue");
$("li:odd").css("background-color", "red");

$("li:nth-child(3)").css({ "list-style": "none", color: "white" });

$('[href="google"]').css("font-size", "30px");

$("*").css("font-family", "arial, sans-serif");
