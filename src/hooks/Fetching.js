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

export const FetchDataWithDetails = (urlPath) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const FetchData = async () => {
      try {
        let firstResponse = await axios.get(urlPath, {});
        let firstResponseLength = firstResponse.data.results.length;
        firstResponse.data.results.map(async (firstResponseItem, index) => {
          let firstResponseItemDetails = await axios.get(
            firstResponseItem.url,
            {}
          );
          setResponse((oldResponse) => [
            ...oldResponse,
            firstResponseItemDetails.data,
          ]);
          if (index === firstResponseLength - 1) {
            setLoading(false);
          }
        });
      } catch (err) {
        setError(err);
      }
    };
    FetchData();
  }, [urlPath]);
  return { loading, response, error };
};
