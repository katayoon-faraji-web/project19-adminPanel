'use client'
import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://65d06b63ab7beba3d5e310dc.mockapi.io/adminpanel")
      .then((res) => res.json())
      .then((data) => setData(data))
 
  }, []);
  // console.log(data);
  return data;
};

export default useFetch;