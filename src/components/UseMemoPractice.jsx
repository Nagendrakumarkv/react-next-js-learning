import { useState, useMemo } from "react";

const users = ["Nagendra", "Vinod", "Kumar", "Arun", "Suresh", "Mallikarjuna"];

export default function SearchFilter() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    console.log("Filtering...");
    return users.filter((u) =>
      u.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div>
      <h2>Search User</h2>
      <input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filtered.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
