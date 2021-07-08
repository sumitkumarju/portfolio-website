window.onload = function () {
  getQuote().then((data) => setQuotehelper(data));
};

async function getQuote() {
  const url = "https://type.fit/api/quotes";
  const response = await fetch(url);
  var data = await response.json();
  return data;
}

function setQuotehelper(data) {
  data = data.filter((q) => q.text.length < 50);

  setInterval(() => {
    setQuote(data[Math.floor(Math.random() * data.length)]);
  }, 3000);
}

function setQuote(q) {
  var x = document.getElementById("quote");

  x.innerHTML =
    '"' +
    q.text +
    '"<br/>' +
    '<span style="color: #00adb5">' +
    (q.author ? q.author : "Anonymous") +
    "</span>";
}
