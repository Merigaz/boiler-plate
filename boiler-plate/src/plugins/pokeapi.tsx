import axios from "axios";


const client = axios.create({
   baseURL: "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0" 
});
console.log (client)