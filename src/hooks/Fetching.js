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

export const FetchMonstersWithDetails = (urlPath) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const FetchData = async () => {
      try {
        let monsters = await axios.get(urlPath, {});
        let monstersLength = monsters.data.results.length;
        monsters.data.results.map(async (monster, index) => {
          let monsterDetails = await axios.get(monster.url, {});
          setResponse((oldResponse) => [...oldResponse, monsterDetails.data]);
          if (index === monstersLength - 1) {
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
