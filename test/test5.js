fetch(
  "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=1NOAGJSJSLF48RY2"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
