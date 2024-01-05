var chan = new XMLHttpRequest();
chan.open("GET", "https://restcountries.com/v2/all");
chan.send();
chan.onload = function () {
  var resultt = JSON.parse(chan.response);
  resultt.forEach((element) => {
    console.log(element.name);
    console.log(element.capital);
    console.log(element.flag);
  });
};
