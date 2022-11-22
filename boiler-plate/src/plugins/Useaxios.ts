import axios from "axios";
import Request from "../interfaces/request";
import { useState, useEffect } from "react";
enum Methods {
  get = "get",
  post = "post",
  default = "get",
}

const useAxios = ({ url, method, body, headers }: Request) => {
  axios.defaults.baseURL = "https://pokeapi.co/api/v2/pokemon";
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res: any) => {
        setResponse(res.data);
      })
      .catch((err: any) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;
