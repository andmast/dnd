import { useEffect, useState } from "react";
import axios from "../utlis/axios";

export const useFetch = (urlPath) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const FetchData = () => {
      axios
        .get(urlPath, {})
        .then((res) => {
          const data = res.data;
          console.log(data);
          setResponse(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    };
    FetchData();
  }, [urlPath]);
  return { loading, response, error };
};
