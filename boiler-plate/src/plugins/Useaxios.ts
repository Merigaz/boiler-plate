import axios from "axios";
import Request from "../interfaces/request";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../store/reducers/loadingSlice";

const useAxios = ({ url, method, body, headers }: Request) => {
  axios.defaults.baseURL = "https://pokeapi.co/api/v2/pokemon";
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res: any) => {
        setResponse(res.data);
      })
      .catch((err: any) => {
        setError(err);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [method, url, body, headers, dispatch]);

  return { response, error };
};

export default useAxios;