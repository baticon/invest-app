async function fetchGraphInfo(companyID: string) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${companyID}&apikey=DBEIFOCTBM0JM5V4`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("DATAWEEKLYALPHAVANTAGE.tsx - something wrong");
  }
}

export default fetchGraphInfo;
