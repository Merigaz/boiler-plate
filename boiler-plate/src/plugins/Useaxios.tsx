import axios from "axios";

async function getPokemon() {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  return data
}

export default getPokemon;