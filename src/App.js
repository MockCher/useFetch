import PokeCard from "./PokeCard";
import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const [data] = useFetch("https://pokeapi.co/api/v2/pokemon?limit=15");

  return (
    <>
      {data &&
        data.results &&
        data.results.map((item) => (
          <PokeCard url={item.url} name={item.name} />
        ))}
    </>
  );
}
