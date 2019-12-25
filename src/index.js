import "./global";
let currentQuote;
let currentAuthor;
let backgroundColorNumber = Math.floor(Math.random() * 8 + 1);

// Get random quote after loading of page
$(document).ready(function() {
  getQuote();
});
// Set random background color
$(document).ready(function() {
  console.log();
  $("#quote-box").addClass("background-color-" + backgroundColorNumber);
});

$("#new-quote").click(function() {
  getQuote();
  // Remove current background color
  $("#quote-box").removeClass("background-color-" + backgroundColorNumber);
  // Set new background color
  backgroundColorNumber = Math.floor(Math.random() * 8 + 1);
  $("#quote-box").addClass("background-color-" + backgroundColorNumber);
});

$("#tweet-quote").click(function(e) {
  $(this).attr(
    "href",
    "https://twitter.com/intent/tweet?text=" +
      ' "' +
      currentQuote +
      '" - ' +
      currentAuthor
  );
});

function getQuote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/",
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
      method: "getQuote",
      lang: "en",
      format: "jsonp"
    }
  })
    .done(function(data) {
      //console.log(data);
      currentQuote = data.quoteText;
      $("#text").text(currentQuote);
      if (data.quoteAuthor === "") {
        currentAuthor = "Unknown";
      } else {
        currentAuthor = data.quoteAuthor;
      }
      $("#author").text(currentAuthor);
    })
    .fail(function(err) {
      console.log("Error: " + err.status);
    });
}
