const chan = new XMLHttpRequest();
chan.open("GET", "https://restcountries.com/v2/all");
chan.send();
chan.onload = () => {
    const result = JSON.parse(chan
        .response);
  const result1 = result.reduce((accval, country) => {
    if (country.population > 0) {
      return accval + country.population;
    }
    return accval;
  }, 0);
  console.log(result1);
};
