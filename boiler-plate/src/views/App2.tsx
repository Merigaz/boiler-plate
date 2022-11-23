import { Methods } from "../interfaces/request";

import Pokecard from "../components/pokecard/Pokecard";
import useAxios from "../plugins/Useaxios";
import Spinload from "../components/loading/Spinload";


function App2() {
  
  const { response, error } = useAxios({
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
