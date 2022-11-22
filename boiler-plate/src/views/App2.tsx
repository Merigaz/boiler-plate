import { Methods } from "../interfaces/request";
import { useEffect, useState } from "react";
import Pokecard from "../components/pokecard/Pokecard";
import useAxios from "../plugins/Useaxios";

function App2() {
  const { response, loading, error } = useAxios({
    method: Methods["get"],
    url: "/ditto",
    body: JSON.stringify({}),
    headers: JSON.stringify({}),
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);
  let args: any = {
    response,
  };
  return (
    <>
      <Pokecard {...args} />;
    </>
  );
}

export default App2;
