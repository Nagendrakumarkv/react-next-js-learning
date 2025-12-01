import useFetch from "../hooks/useFetch";

export default function CustomHook() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div>
      <h2>loading: {loading}</h2>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <h2>loading: {loading}</h2>
    </div>
  );
}
