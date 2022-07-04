async function fetchGraphInfo(companyID: string) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${companyID}&apikey=1NOAGJSJSLF48RY2`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("DATAMONTHLYALPHAVANTAGE - something wrong");
  }
}

export default fetchGraphInfo;
