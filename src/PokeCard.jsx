import useFetch from "./useFetch";

export default function PokeCard({ url }) {
  const [data] = useFetch(url);
  return (
    <div>
      {console.log(data)}
      {data && (
        <div
          style={{
            border: "1px solid grey",
            padding: 10,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}
        >
          <h4 style={{ textTransform: "capitalize", flex: 5 }}>{data.name}</h4>
          <div style={{ flexDirection: "column", flex: 1 }}>
            {data.types.map((type) => (
              <p style={{ textTransform: "capitalize" }}>{type.type.name}</p>
            ))}
          </div>
          <img src={data.sprites.front_default} alt={`pokemon ${data.name}`} />
        </div>
      )}
    </div>
  );
}
