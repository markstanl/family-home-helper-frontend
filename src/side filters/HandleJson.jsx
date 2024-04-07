import React, { useState, useEffect } from "react";
import axios from "axios";

const HandleJson = ({ rankingArray, setFinalCity, setCityArray }) => {
  console.log(`Ranking Array: ${rankingArray}`);
  const parameters = {
    user_employability: rankingArray[0],
    user_safety: rankingArray[1],
    user_quality: rankingArray[2],
    user_budget: rankingArray[3],
  };
  axios
    .get("http://147.182.254.93:8001/filter_data", { params: parameters })
    .then((response) => {
      console.log(`Response: ${JSON.stringify(response.data[0])}`);
      setFinalCity(response.data[0]);
      setCityArray(response.data);
    });
};

export default HandleJson;
