import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useCompanyInfo from "./useCompanyInfo";
import useFiveMinGraphInfo from "./useFiveMinGraphInfo";
import useDailyGraphInfo from "./useDailyGraphInfo";
import useWeeklyGraphInfo from "./useWeeklyGraphInfo";
import useMonthlyGraphInfo from "./useMonthlyGraphInfo";
import { ISlicedGraphInfo } from "./types";
import { CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import Header from "./header";
import Footer from "../footer/footer";

//https://recharts.org/en-US/examples/SimpleLineChart

const CompanyDetails = () => {
  const URL = useLocation();
  const myArray = URL.pathname.split("/");
  const companyID = myArray[2];

  const [timeSeries, setTimeSeries] = useState<string>("test");
  const companyInfo = useCompanyInfo(companyID);
  const graphFiveMinInfo = useFiveMinGraphInfo(companyID);
  const graphDailyInfo = useDailyGraphInfo(companyID);
  const graphWeeklyInfo = useWeeklyGraphInfo(companyID);
  const graphMonthlyInfo = useMonthlyGraphInfo(companyID);

  const [identifier, setIdentifier] = useState<string>("");
  const [dataKey, setDataKey] = useState<string>();
  const [dataArray, setDataArray] = useState<ISlicedGraphInfo[]>([]);

  useEffect(() => {
    //Five min
    if (graphFiveMinInfo && timeSeries === "every five min") {
      let timeSeries = graphFiveMinInfo["Time Series (5min)"];
      let dataArray: ISlicedGraphInfo[] = Object.entries(timeSeries).map(
        ([key, obj]) => {
          if (obj["4. close"]) {
            console.log("test1 EVERY FIVE MIN from company details");
            console.log(key, obj["4. close"]);
            setIdentifier(key);
            return { name: key, pv: Number(obj["4. close"]) };
          } else {
            console.log("test2 EVERY FIVE MIN from company details");
            console.log(key);
            setIdentifier(key);
            return { name: key, pv: 0 };
          }
        }
      );
      setDataArray(dataArray);
      setDataKey("Every 5 minutes");
      console.log("data check from EVERY FIVE MIN");
      console.log(dataArray);
    }
    if (graphDailyInfo && timeSeries === "daily") {
      let timeSeries = graphDailyInfo["Time Series (Daily)"];
      console.log(timeSeries);
      let dataArray: ISlicedGraphInfo[] = Object.entries(timeSeries).map(
        ([key, obj]) => {
          if (obj["4. close"]) {
            console.log("test3 DAILY from company details");
            console.log(key, obj["4. close"]);
            setIdentifier(key);
            return { name: key, pv: Number(obj["4. close"]) };
          } else {
            console.log("test4 DAILY from company details");
            console.log(key);
            setIdentifier(key);
            return { name: key, pv: 0 };
          }
        }
      );
      setDataArray(dataArray);
      setDataKey("Daily");
      console.log("data check from DAILY");
      console.log(dataArray);
    }
    //Weekly info
    if (graphWeeklyInfo && timeSeries === "weekly") {
      let timeSeries = graphWeeklyInfo["Weekly Time Series"];
      let dataArray: ISlicedGraphInfo[] = Object.entries(timeSeries).map(
        ([key, obj]) => {
          if (obj["4. close"]) {
            console.log("test5 WEEKLY from company details");
            console.log(key, obj["4. close"]);
            setIdentifier(key);
            return { name: key, pv: Number(obj["4. close"]) };
          } else {
            console.log("test6 WEEKLY from company details");
            console.log(key);
            setIdentifier(key);
            return { name: key, pv: 0 };
          }
        }
      );
      setDataArray(dataArray);
      setDataKey("Weekly");
      console.log("data check from WEEKLY");
      console.log(dataArray);
    }
    //Monthly info
    if (graphMonthlyInfo && timeSeries === "monthly") {
      let timeSeries = graphMonthlyInfo["Monthly Time Series"];
      let dataArray: ISlicedGraphInfo[] = Object.entries(timeSeries).map(
        ([key, obj]) => {
          if (obj["4. close"]) {
            console.log("test7 MONTHLY from company details");
            console.log(key, obj["4. close"]);
            setIdentifier(key);
            return { name: key, pv: Number(obj["4. close"]) };
          } else {
            console.log("test8 MONTHLY from company details");
            console.log(key);
            setIdentifier(key);
            return { name: key, pv: 0 };
          }
        }
      );
      setDataArray(dataArray);
      setDataKey("Monthly");
      console.log("data check from MONTHLY");
      console.log(dataArray);
    }
  }, [
    graphFiveMinInfo,
    graphDailyInfo,
    graphWeeklyInfo,
    graphMonthlyInfo,
    timeSeries,
  ]);

  return (
    <div
      key={identifier}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header></Header>
      <div
        key={`${identifier}+q`}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          WebkitJustifyContent: "space-around",
        }}
      >
        <div>
          <img src={`${companyInfo?.logo}`} alt="Company logo"></img>
        </div>
        <div key={`${identifier}+2`}>
          <span>{companyInfo?.name}</span>
        </div>
        <div key={`${identifier}+e`}>
          <button
            onClick={() => {
              console.log("setting to EVERY FIVE MIN");
              setTimeSeries("every five min");
              console.log(timeSeries);
            }}
          >
            Every 5 min
          </button>
          <button
            onClick={() => {
              console.log("setting to DAILY");
              setTimeSeries("daily");
              console.log(timeSeries);
            }}
          >
            Daily
          </button>
          <button
            onClick={() => {
              console.log("setting to WEEKLY");
              setTimeSeries("weekly)");
              console.log(timeSeries);
            }}
          >
            Weekly
          </button>
          <button
            onClick={() => {
              console.log("setting to MONTHLY");
              setTimeSeries("monthly");
              console.log(timeSeries);
            }}
          >
            Monthly
          </button>
        </div>
      </div>
      <LineChart
        width={900}
        height={440}
        data={dataArray}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          // dataKey={dataKey}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
      <Footer></Footer>
    </div>
  );
};

export default CompanyDetails;
