import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.headers["x-api-key"] = "DEMO-API-KEY";
const catsUrl =
  "https://api.thecatapi.com/v1/images/search?limit=80&mime_types=&order=Random&size=small&page=1&sub_id=demo-63a491";

const useRequest = (url = catsUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(({ data: dataFromRes }) => {
        setLoading(false);
        setData(dataFromRes);
      })
      .catch((err) => {
        setLoading(false);
        setError("Bad things happened - cannot get data.");
      });
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useRequest;
