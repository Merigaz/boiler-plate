import { Methods } from "../interfaces/request";

import Pokecard from "../components/Pokecard/Pokecard";
import useAxios from "../plugins/Useaxios";



function App2() {
  
  const { response } = useAxios({
    method: Methods["get"],
    url: "/ditto",
    body: JSON.stringify({}),
    headers: JSON.stringify({}),
  });

  let args: any = {
    response,
  };
  return <Pokecard {...args}/>;
}

export default App2;
