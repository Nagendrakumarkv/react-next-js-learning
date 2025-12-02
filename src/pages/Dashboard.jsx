import useApi from "../hooks/useApi";

export default function Dashboard() {
  const { data, loading } = useApi(
    "https://jsonplaceholder.typicode.com/users"
  );

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={logout}>Logout</button>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        data.map((u) => <p key={u.id}>{u.name}</p>)
      )}
    </div>
  );
}
