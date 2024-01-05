const URL = "https://restcountries.com/v3.1/all";
const chan = new XMLHttpRequest();
chan.open("GET", URL);
chan.send();
chan.onload = () => {
  const continent = JSON.parse(chan.response);
  let asia = continent.filter((country) => country.region === "Asia");
  console.log(`${asia.map((country) => country.name.common)}`);
};
